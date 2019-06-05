import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean, text } from '@storybook/addon-knobs';
import maskRevamp from './maskRevamp.vue';
import goBeautyButton from './goBeautyButton.vue';
import linkDownload from './linkDownload.vue'

const stories = storiesOf('Presslogic|MaskRevamp', module);
stories.addDecorator(withKnobs);
stories.add(
    'Mask-Revamp',
    () => ({
				components: { maskRevamp },
				props: {
					show: {
						default: boolean('show', true)
					},
					background:{
						default: color('background', 'rgba(0,0,0,.7)')
					},
					device: {
						default: text('device', 'desktop')
					},
					viewer: {
						default: text('viewer', 'blog')
					},
					iconColor: {
						default: color('iconColor','#fff')
					},
					iconSize: {
						default: number('iconSize',20)
					}
				},
				propsDescription: {
					maskRevamp: {
						background: 'mask 背景顏色',
						device: '使用裝置 （只能 desktop 或 mobile )',
						viewer: '瀏覽者身份 （只能 blog 或 user )',
						iconColor: '關閉 mask icon 背景顏色',
						iconSize: '關閉 mask icon 大小'
					}
				},
				template: `<maskRevamp  :show="show" :background="background" :device="device" :viewer="viewer" :iconColor="iconColor" :iconSize="iconSize" />`
    }),
    {
        notes: '回到最上層按鈕',
        info: {
            summary: '回到最上層按鈕'
        }
    }
);

stories.add(
	'goBeautyButton',
	() => ({
			components: { goBeautyButton },
			props: {
				url:{
					default: text('url', 'https://beautybee.com/')
				},
				btnTxt:{
					default: text('btnTxt', '前往 BeautyBee')
				},
				btnTxtColor: {
					default: text('btnTxtColor', 'linear-gradient(to bottom, #ff6987, #ff525a)')
				},
				btnTxtSize: {
					default: number('btnTxtSize', 20)
				}
			},
			propsDescription: {
				goBeautyButton: {
					url: '按鈕連結',
					btnTxt: '按鈕文字',
					btnTxtColor: '按鈕文字顏色',
					btnTxtSize:'按鈕文字大小'
				}
		},
		template: `<goBeautyButton :url="url" :btnTxt="btnTxt" :btnTxtColor="btnTxtColor" :btnTxtSize="btnTxtSize"/>`
	}),
	{
			notes: 'mask button Revamp for BeautyBee',
			info: {
					summary: 'mask button Revamp for BeautyBee'
			}
	}
);

stories.add(
	'linkDownload',
	() => ({
			components: { linkDownload },
			props: {
				android: {
					default: boolean('android', true)
				},
				ios: {
					default: boolean('ios', true)
				},
				androidUrl: {
					default: text('androidUrl', 'https://www.google.com.tw')
				},
				iosUrl: {
					default: text('iosUrl', 'https://www.google.com.tw')
				}
			},
			propsDescription: {
				android: 'android 按鈕是否顯示',
				ios: 'ios 按鈕是否顯示',
				androidUrl: 'android 連結',
				iosUrl: 'ios 連結'
		},
		template: `<linkDownload :android="android" :ios="ios" :iosUrl="iosUrl" :androidUrl="androidUrl"/>`
	}),
	{
			notes: 'linkDownload button Revamp for BeautyBee',
			info: {
					summary: 'linkDownload button Revamp for BeautyBee'
			}
	}
);