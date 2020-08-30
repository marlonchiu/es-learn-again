<template>
  <div>
    <label for="upload" class="choose-img" :class="{upLoading: isUploading}">选择图片上传</label>
    <input
      id="upload"
      type="file"
      multiple
      style="display: none;"
      accept="image/*"
      @change="onChange" ref="file" :disabled="isUploading"
    >
    <p class="tip">提示：一次可选择多张图片，最多不超过9张（单张图片大小 &lt; 1M）</p>
    <ul class="img-container">
        <li
        v-for="(item, index) in imgList"
        :key="index"
        :style="{background: `url(${item}) no-repeat center/contain` }"
        ></li>
    </ul>

  </div>
</template>>

<script>
import OSS from 'ali-oss'
const ACCESSKEY = {
  BUCKET: 'imooc-es',
  ID: '请填写自己的accessKeyId',
  SECRET: '请填写自己的accessKeySecret'
}

export default {
  name: 'Upload',
  data () {
    return {
      client: new OSS({
        region: 'oss-cn-beijing',
        bucket: ACCESSKEY.BUCKET,
        accessKeyId: ACCESSKEY.ID,
        accessKeySecret: ACCESSKEY.SECRET
      }),
      imgList: [], // 存放上传完成的图片的列表
      isUploading: false // 当前图片是否正在上传
    }
  },
  methods: {
    onChange () {
      // 可选链
      const newFiles = this.$refs?.file?.files
      console.log(newFiles)
      // 校验
      if (newFiles.length > 9) {
        alert('最多可以一次选择9张图片')
        return false
      }
      const files = []
      for (const file of newFiles) {
        const size = file.size / 1024 / 1024 // 把单位转化成M
        if (size > 1) {
          alert('请选择1M以内的图片')
          return false
        }
        files.push(file)
      }
      // console.log(files)
      this.uploadFilesByOSS2(files)
    },
    // 上传多图到阿里云OSS
    uploadFilesByOSS (files) {
      this.isUploading = true
      const uploadRequest = []
      for (const file of files) {
        const filePromise = new Promise((resolve, reject) => {
          this.client.put(`${Math.random()}-${file.name}`, file)
            .then(res => {
              // console.log(res)
              // this.imgList = [...this.imgList, res.url]
              resolve(res.url)
            })
            .catch(err => {
              // console.log(err)
              reject(err)
            })
        })
        uploadRequest.push(filePromise)
      }

      Promise.allSettled(uploadRequest).then(res => {
        console.log(res)
        const imgs = []
        for (const item of res) {
          if (item.status === 'fulfilled') {
            imgs.push(item.value)
          }
        }
        this.imgList = imgs
        this.isUploading = false
      }).catch(err => {
        console.log(err)
      })
    },
    // async / await
    async uploadFilesByOSS2 (files) {
      this.isUploading = true
      const imgs = []
      for (const file of files) {
        const result = await this.client.put(`${Math.random()}-${file.name}`, file)
        imgs.push(result.url)
        this.imgList = imgs
        this.isUploading = false
      }
    }
  }
}
</script>

<style scoped>
.choose-img {
  display: block;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #42b983;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.tip {
    color: #ccc;
}

.img-container > li{
  list-style: none;
  width: 150px;
  height: 100px;
  float: left;
  margin: 0 30px 30px 0;
  border: 1px solid #ccc;
}

.upLoading{
  background-color: #ccc;
}
</style>
