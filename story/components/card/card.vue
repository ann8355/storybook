<template>
    <div>
        <ParticleEffectButton :visible.sync="btnOps.visible" :animating.sync="btnOps.animating" :options="btnOps" cls="btn-cls">

            <div class="card" @click="click">
                <div class="top">
                    <div class="avatar">
                        <img :src="avatar" alt="">
                    </div>
                    <div class="all">
                        <div class="name">{{ authorName }}</div>
                        <div class="date">{{ date }}</div>
                    </div>
                </div>
                <div class="cover">
                    <img :src="cover" alt="">
                </div>
                <div class="title" :style="{ color: titleColor }">
                    {{ title }}
                </div>
            </div>
        </ParticleEffectButton>
        <button @click="btnOps.visible=!btnOps.visible">reload</button>
    </div>
</template>
<script>
import ParticleEffectButton from "vue-particle-effect-buttons"

export default {
    props: {
        avatar: {
            type: String
        },
        titleColor: {
            type: String
        },
        title: {
            type: String
        },
        authorName: {
            type: String
        },
        date: {
            type: String
        },
        cover: {
            type: String
        }
    },
    methods: {
        click () {
            console.log('clicked');
        }
    },
    data () {
        return {
            btnOps: {
                type: "circle",
                easing: "easeOutQuart",
                size: 2,
                particlesAmountCoefficient: 17,
                oscillationCoefficient: 2,
                color: function () {
                    return Math.random() < 0.5 ? "#000000" : "#ffffff";
                },
                onComplete: () => {
                    console.log("complete");
                },
                onBegin: () => {
                    console.log("begin");
                },
                visible: true,
                animating: false
            },
        }
    },
    components: {
        ParticleEffectButton
    }
}
</script>
<style>
.title {
    color: #000;
    line-height: 24px;
    font-size: 18px;
    font-weight: 700;
    height: 48px;
    overflow: hidden;
}
.card {
    width: 500px;
    height: 400px;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 50px auto;
    background: #fff;
    border-radius: 4px;
}
.top {
    display: flex;
}
.avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.name {
    color: #000;
    font-size: 18px;
    font-weight: 900;
    font-family: Lato, sans-serif;
    line-height: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    line-height: 25px;
}
.date {
    color: #9b9b9b;
    font-size: 15px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top {
    margin-bottom: 10px;
}
.top img {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: 50%;
    border-radius: 50%;
    margin-right: 12px;
    float: left;
}
.cover {
    width: 100%;
    margin-bottom: 10px;
}
.cover img {
    width: 100%;
}
.vue-particle-effect-button .particles-button {
    padding: 0 !important;
}
</style>
