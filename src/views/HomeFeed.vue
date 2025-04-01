<template>
    <div class="">
        <VideoCard :video="video"/>
    </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue';


export default {
    name: "HomeFeed",
    components: {
        VideoCard,
    },
    data(){
        return {
            video: []
        }
    },
    async mounted(){
        const url = ''
        const options = {
            method: 'GET',
            headers: {

            }
        };
        
        fetch(url, options)
        .then(response => response.json())
        .then(data => this.videos = data.content)

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }
}
</script>
