<template>
    <div>
        <div class="card">
            <div class="top">
                <div class="avatar">
                    <img src="https://beautybee.imgix.net/girlstyle/system/images/girlstyle-tw_icon.jpg?w=150" alt="">
                </div>
                <div class="all">
                    <div class="name">Girlstyle 官方</div>
                    <div class="date">10 min</div>
                </div>
            </div>
            <div class="cover">
                <img src="https://girlstyle-tw.imgix.net/wp-content/uploads/2019/04/711%E9%85%92.jpg" alt="">
            </div>
            <div class="title" :style="{ color: color0 }">
                {{ text }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['color0', 'text']
}
</script>
<style scoped>
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
</style>
