<template>
    <q-layout class="about">
        <div class="row wrap xs-gutter">
            <h2 class="offset-sm-2 col-sm-8 text-bold offset-xs-1 col-xs-10">About Us</h2>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10 ">
            <h5 class="text-italic text-bold offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">Ride For Hope Mission Statement</h5>
            <h6 class="text-italic light-paragraph offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <b>Ride For Hope</b> is a charity bicycle event with the firm belief that quality healthcare should be accessible
                to everyone. The event is unique in that the full cost of the ride is completely funded by charitable contributions
                from local sponsors. This allows for 100% of participant fees and donations to go directly to charity. ​
            </h6>
            <h6 class="text-italic light-paragraph offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                We support the holistic approach to healthcare where true healing focuses not only on symptoms, but the underlying root cause
                of disease. </h6>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10">
            <div class="para offset-sm-2 col-sm-5 offset-xs-1 col-xs-10">
                <p class="text-justify">
                    <em>
                        <b>Ride For Hope</b>
                    </em> is "gearing up" for our 4th
                    <i>annual fully supported</i> bicycle charity event which will take place on June 23, 2018 .
                </p>
                <ul>
                    <li>In 2015 over $7,000 wa donated.</li>
                    <li>In 2016 over $9,000 wa donated.</li>
                    <li>In 2017 over $12,500 wa donated.</li>
                </ul>
                <p class="text-justify">
                    In
                    <em>
                        <u>three years</u>
                    </em> the event has raised over
                    <em>
                        <b>$28,500</b>
                    </em> for charity. We are always striving to increase rider participation and funds raised and in 2018 we are
                    hoping to eclipse the mark set in 2017.
                </p>
                <p class="text-justify">
                    <em>
                        <b>Ride For Hope</b>
                    </em> is a small team comprised of volunteers and other charitable groups who hope to do big things for these
                    great causes. We welcome anyone who shares our vision to come partner with us to help promote access
                    to quality healthcare for everyone.

                </p>
            </div>
            <div class="pic col-sm-4 col-xs-12 text-center">
                <img class="rider" src="statics/rider.png" alt="rider">
            </div>
            <div class="paragroup offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <p class="text-justify">
                    <em>
                        <b>A huge thanks to all of you who have either participated or believe in the Ride For Hope cause....</b>
                    </em>
                    individual cyclists, cycling clubs and teams, sponsors, volunteers .... for your generosity, support,
                    and help in transforming the Ride For Hope vision into reality and helping us to raise awareness of these
                    important ongoing needs!
                    <em>
                        <b>Thank-You!</b>
                    </em>

                </p>
            </div>
            <div class="paragroup offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <h4 class="text-center signature">
                    <em>
                        <b>Your Ride For Hope Team</b>
                    </em>
                </h4>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QTransition
    } from 'quasar'
    export default {
        name: 'About',
        data() {
            return {}
        },
        components: {
            QLayout,
            QTransition
        }
    }
</script>

<style scoped>
    .signature {
        color: rgb(180, 0, 0);
        font-family: 'Niconne', cursive;
    }

    .rider {
        border: 5px solid black;
        height: 18rem;
        width: 18rem;
    }

    .about {
        background-color: rgb(206, 201, 201);
    }

    .return {
        background-color: red;
    }
</style>