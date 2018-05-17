<template>
    <!-- <div ref="test"></div> -->
    <!-- <div data-idonate-embed='1e91f3f7-8e57-4853-b7d2-fd246340c903'></div> -->
    <!-- <iframe src="https://embed.idonate.com/app4/loader.html?embed_id=1e91f3f7-8e57-4853-b7d2-fd246340c903" frameborder="0" scrolling="no" style="visibility: visible; width: 100%; height: 561px; margin: 0px; padding: 0px"></iframe> -->
    <q-layout class="donate">
        <div class="row wrap">
            <div class="col-xs-12" ref="test">
                    <!-- <div id="imATHLETEStoreWidget_6BAC6260E56D8C13026F2E5D56D2D878"></div> -->
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QBtn,
        openURL
    } from 'quasar'
    export default {
        name: 'Donate',
        data() {
            return {}
        },
        components: {
            QLayout,
            QBtn
        },
        created() {
            // let script = document.createElement('script')

            // script.setAttribute('type', 'text/javascript');
            // script.setAttribute('src', 'https://embed.idonate.com/idonate.js')
            // document.body.appendChild(script)


        },
        computed: {
            routes() {
                return this.$store.state.routes
            }
        },
        methods: {
            launch(url) {
                openURL(url)
            },
        }
    }
</script>

<style scoped>
    .img {
        margin-top: 1rem;
    }

    .grow {
        transition: all .35s ease-in-out;
        max-height: 25rem;
    }

    .grow:hover {
        transform: scale(2.0);
    }

    .cbtn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .font {
        font-family: 'Lobster', cursive;
        color: black;
    }

    .fancy {
        background-color: rgba(202, 202, 202, 0.808);
        margin-top: 2rem;
    }

    .mid {
        background-color: white;
    }
</style>