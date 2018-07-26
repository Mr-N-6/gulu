<!--<template>
	<div class="dialogWrap">
		<div class="dialogCover" v-if="isShow" @click="close()" >
			<transition name="drop">
				<div class="dialogContent" v-if="isShow">
					<p @click="close()">&times;</p>
					<slot></slot>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name:'dialog',
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			close(){
				this.$emit('onClose')
			}
		}
	}
</script>

<style>
	.drop-enter-active{
    transition: all .5s ease;
  }
  .drop-leave-active{
    transition: all .3s ease;
  }
.drop-enter{/*进入完成的时候*/
  transform: translateY(-500px);
}
  .drop-leave-active{/*开始离开的时候*/
    transform: translateY(-500px);
  }
  .drop-leave{/*离开完成的时候*/
    transform: translateY(0px);
  }
	
	.dialogCover {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(150,150,150,.6);
		z-index: 99;
	}
	.dialogContent {
		width: 540px;
		height: 272px;
		background: #fff;
		margin: 254px auto;
		
	}
	.dialogContent p {
		width: 30px; 
		height: 30px;
		line-height: 30px;
		font-size: 30px;
		float: right;
		margin: 6px 4px 0 0;
		color: #999;
		cursor: pointer;
	}
</style>

-->
	
	
	
<template>
    <div class="dialog-wrap">
        <div class="dialog-cover" v-if="isShow" @click="closeMyself()"></div>
        <transition name="drop">
            <div class="dialog-content" v-if="isShow">
              <p class="dialog-close" @click="closeMyself()">&times;</p>
              <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "dialog",
      props:{
          isShow:{
            type:Boolean,
            default:false
          }
      },
      methods:{
        closeMyself(){
          this.$emit('onClose')
        }
      }
    }
</script>

<style>
	  .drop-enter-active{
	    transition: all .5s ease;
	  }
	  .drop-leave-active{
	    transition: all .3s ease;
	  }
	.drop-enter{/*进入完成的时候*/
	  transform: translateY(-500px);
	}
	  .drop-leave-active{/*开始离开的时候*/
	    transform: translateY(-500px);
	  }
	  .drop-leave{/*离开完成的时候*/
	    transform: translateY(0px);
	  }
	.dialog-cover{
	  position: fixed;
	  width: 100%;
	  height: 100%;
	  z-index: 99;
	  top:0;
	  left:0;
	  background-color: #000;
	  opacity: .3;
	}
	  .dialog-content{
	    position: fixed;
	    width: 50%;
	    max-height: 50%;
	    left:50%;
	    top:50%;
	    margin-left: -25%;
	    margin-top: -15%;
	    background-color: #fff;
	    z-index: 999;
	  }
	  .dialog-close{
	    cursor: pointer;
	    text-align: right;
	    margin-right: 10px;
	    font-size: 24px;
	    color: #999;
	  }
</style>
