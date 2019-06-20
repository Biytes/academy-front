<template lang="html">
  <div class="campus-event-container">
    <div class="campus-events">
      <div class="panel-header">
        <img src="@static/icons/events.png">
        <span class="mytitle">
          {{ title }}
          <small>{{ subTitle }}</small>
        </span>
        <div class="activity-hints">
          <span class="arrival-hint">准备开始</span>
          <span class="pick-up-hint">正在进行</span>
          <span class="end-hint">已经结束</span>
        </div>
      </div>
      <div class="campus-events-content">
      <el-tooltip
          v-for="(item, index) in events"
          :key="index"
          effect="dark"
          :content="item.brief"
          placement="top-end"
          :disabled="!item.brief">
        <article :class="[ isEnd(item.endTime) ? 'end-event':(isStart(item.startTime) ? 'pickup-appointment':'on-hold-arrival')]">
          <p>
            <span class="event-day">{{ item.startTime | getDay }}</span>
            <br>
            <span class="event-month">{{ item.startTime | getMonthEnglish }}</span>
          </p>
          <p>
            <span class="event-name">{{ item.title }}</span>
            <span class="event-describe">{{ item.brief }}</span>
          </p>
        </article>
      </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'campus-event',
  props: ['events', 'title', 'subTitle', 'routeLink'],
  data () {
    return {

    }
  },
  methods: {
    isEnd: (val) => {
      let now = new Date().getTime() // 现在的时间
      let end = new Date(val).getTime() // 事件结束的时间
      if (now - end > 0) { // 现在的时间大于结束的时间
        return true // isEnd true 已经结束了
      } else {
        return false // isEnd false 还没结束
      }
    },
    isStart: (val) => {
      let now = new Date().getTime() // 现在的时间
      let start = new Date(val).getTime() // 事件开始的时间
      if (now > start) {
        return true // 已经开始 添加 class: pick-up-appointment
      } else {
        // 最好在做一个判断7天之内开始的
        return false // 还没开始 添加 class: on-hold-arrival
      }
    }
  },
  filters: {
    getDay: (val) => {
      let day = new Date(val).getDate()
      return day
    },
    getMonthEnglish: (val) => {
      let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let month = new Date(val).getMonth()
      return monthArray[month]
    }
  }
}
</script>

<style lang="scss" scoped>
.campus-event-container {
  display: inline-block;

  .campus-events {
    margin: 0 10px;
    vertical-align: top;
    font-family: "Microsoft Yahei";
    a {
      text-decoration: none;
      color: #333;
    }

    .panel-header{
      padding: 2px 15px 3px;
      border: 0;

      img {
        width:22px;
        height: 22px;
        position: relative;
        top: 3px;
        left:0px;
      }
    }

    .mytitle {
      font-size: 20px;
      font-weight: bold;
      color: #000;
      small {
        font-size: 16px;
        font-weight: normal;
        color: #c4c4c4;
      }
    }

    .activity-hints {
      display: inline-block;
      vertical-align: middle;
      margin-left: 65px;
      span {
        display: block;
        font-size: 10px;
        color: #a8a0a0;
        position: relative;
        margin-left: 15px;
        vertical-align: top;
        &:before {
          position: absolute;
          content: '';
          width: 10px;
          height: 8px;
          left: -15px;
          top: 4px;
        }
        &.pick-up-hint {
          &:before {
            background: #fda84b;
          }
        }
        &.end-hint {
          &:before {
            background: grey;
          }
        }
        &.arrival-hint {
          &:before {
            background: #67c;
          }
        }
      }
    }

    .campus-events-content {
      width:320px;
      height: 375px;
      padding: 5px 10px;
      overflow-x: hidden;
      overflow-y: auto;
      border-bottom: 2px solid #dedede;
      border-top: 2px solid #dedede;

      &::-webkit-scrollbar {
        width: 3px;
        height: 0.5px;
        background-color: #67c;
      }

      &::-webkit-scrollbar-track {
          border-radius: 10px;
          background-color: #f4f4f4;
      }

      &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: #67c;
      }

      article.end-event{
        border-left: 5px solid grey;
      }
      article.on-hold-arrival{
        border-left: 5px solid #67c;
      }
      article.pickup-appointment{
        border-left: 5px solid #fda84b;
      }
      article:hover{
        box-shadow:0 0 4px rgba(0,0,0,0.4);
      }
      article{
        margin: 7px 0;
        display: block;
        background-color: #fff;
        position: relative;
        box-sizing: border-box;
        padding: 0;
      }
      article p{
        display: inline-block;
        box-sizing:border-box;
      }
      article p:first-child{
        width: 60px;
        text-align: center;
        padding: 0;
        border-right: 1px solid #ccc;
        display: inline-block;
      }
      article p:last-child{
        margin: 0;
      }
      article:nth-child(3):after{
        content: "";
        border-bottom: 1px solid #ccc;
        width: 95%;
        position: absolute;
        bottom:0;
        left: 15px;
        z-index: 1;
      }
    }

    .event {
      &-day {
        font-size: 1.2em;
        font-weight: 600;
        box-sizing: border-box;
      }

      &-month {
        font-size: .80em;
        color: #bbb;
        font-weight: 600;
        box-sizing: border-box;
      }

      &-name {
        font-size: 17px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 5px;
        width: 244px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        display: block;
      }

      &-describe{
        font-size: .60em;
        color:#bbb;
        cursor: pointer;
        font-weight: 600;
        width: 244px;
        max-height: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        display: block;

        &:hover {
          color:#6B8AC2;
        }
      }
    }
  }
}
</style>
