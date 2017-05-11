/**
 * Created by Administrator on 2017/5/4.
 */
import $ from 'jquery'

export default ({
  start:{
    x:'',
    y:''
  },
  move:{
    x:'',
    y:''
  },
  end:{
    x:'',
    y:''
  },
  init(el,cbStart,cbMove,cbEnd){
    let _this = this;
    _this.cbStart = cbStart
    _this.cbMove = cbMove
    _this.cbEnd = cbEnd

    $(el).on('mousedown touchstart',function(event){
      if(event.pageX && event.pageY){
        _this.start.x = event.pageX;
        _this.start.y = event.pageY
      }else if(event.changedTouches){
        _this.start.x = event.changedTouches[0].clientX;
        _this.start.y = event.changedTouches[0].clientY
      }

      if(_this.cbStart){
        _this.cbStart(_this)
      }
    })

    el.addEventListener('touchmove',function(event){
      if(event.pageX && event.pageY){
        _this.move.x = event.pageX;
        _this.move.y = event.pageY
      }else if(event.changedTouches){
        _this.move.x = event.changedTouches[0].clientX;
        _this.move.y = event.changedTouches[0].clientY
      }

      if(_this.cbMove){
        _this.cbMove(_this)
      }

    });

    el.addEventListener('mouseup',function(event){
      if(event.pageX && event.pageY){
        _this.end.x = event.pageX;
        _this.end.y = event.pageY
      }else if(event.changedTouches){
        _this.end.x = event.changedTouches[0].clientX;
        _this.end.y = event.changedTouches[0].clientY
      }

      if(_this.cbEnd){
        _this.cbEnd(_this)
      }
    })

  },
  destroy(el){
    // el.unbind('mousedown touchstart')
  }
})
