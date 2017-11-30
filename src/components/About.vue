<template>
    <q-layout class="about black">
        <div class="row wrap">
            <h2 class="text-bold offset-xs-1 col-xs-10 text-center text-italic">Our Mission</h2>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10 ">
            <!-- <h5 class="text-italic text-bold offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">Ride For Hope Mission Statement</h5> -->
            <h6 class="top text-italic light-paragraph offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <b>Ride For Hope</b> is a charity bicycle event with the firm belief that quality healthcare should be accessible
                to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms,
                but the underlying root cause of disease.
            </h6>
            <h6 class="top text-italic light-paragraph offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <b>Ride For Hope</b> is committed to ensuring that 100% of participant fees and donations go directly to charity.
                This unique commitment is made possible by charitable contributions from local sponsors which cover the entire
                cost of the event.
            </h6>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10">
            <h3 class="text-bold offset-xs-1 col-xs-10 text-center text-italic">About Us</h3>
            <div class="para offset-sm-2 col-sm-5 offset-xs-1 col-xs-10">
                <p class="text-justify">
                    <em>
                        <b>Ride For Hope</b>
                    </em> is a small, but growing group of volunteers who have been moved to action for a deep compassion for our
                    fellow citizens. We feel a moral obligation to fight for individuals and families who do not have access
                    to basic healthcare and fundamental human necessities. Many of these individuals and families are grappling
                    with exorbitant healthcare costs and preexisting conditions.

                </p>
                <p class="text-justify">
                    We want to help give these families and individuals
                    <b>
                        <em>"Hope"</em>
                    </b>.
                    <b>
                        <em>"Hope"</em>
                    </b> that they can have access to routine medical treatment;
                    <b>
                        <em>"Hope"</em>
                    </b> that they can avoid unnecessary emergency room visits and hospitalizations;
                    <b>
                        <em>"Hope"</em>
                    </b> that they don’t need to make a choice between paying bills or paying for medication;
                    <b>
                        <em>"Hope"</em>
                    </b> that because they earn a little too much and are not eligible for Medicaid, and are too young for Medicare,
                    that there are still avenues for their healthcare needs;
                    <b>
                        <em>"Hope"</em>
                    </b> that those of us that are more fortunate can help them with basic human needs.
                </p>
                <p class="text-justify">
                    <em>
                        <b>Ride For Hope</b>
                    </em> has donated $28,500 in three years:</p>
                <ul>
                    <li>In 2015 over $7,000 wa donated.</li>
                    <li>In 2016 over $9,000 wa donated.</li>
                    <li>In 2017 over $12,500 wa donated.</li>
                </ul>
            </div>
            <div class="pic col-sm-4 col-xs-12 text-center">
                <img class="rider" src="statics/rider.png" alt="rider">
            </div>
            <div class="paragroup offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <p class="text-justify">
                    This year we are proud to support
                    <b>
                        <em>Genesis Community Health</em>
                    </b> and
                    <b>
                        <em>Boise Rescue Mission</em>
                    </b>.
                    <b>
                        <em>Genesis Community Health</em>
                    </b> is an integrated healthcare facility providing primary medical care, basic dental, mental health, specialty
                    referral and medication to the low-income and uninsured.
                    <b>
                        <em>Boise Rescue Mission</em>
                    </b> provides programs and services including addiction recovery and food and shelter for homeless men, women
                    and children. </p>
                <p class="text-justify">
                    We are determined to continue along our upward fundraising trajectory. We can’t do it alone. We need your help. Collectively
                    we can make a difference. Please join us in helping the most vulnerable in our Treasure Valley Community.
                </p>
            </div>
            <div class="paragroup offset-sm-2 col-sm-8 offset-xs-1 col-xs-10">
                <h4 class="text-center signature">
                    <em>
                        <b>Team Ride For Hope</b>
                    </em>
                </h4>
            </div>
            <div class="offset-sm-2 col-sm-4 offset-xs-1 col-xs-5">
                <a href="https://genesiscommunityhealth.com/about-us/" target="_blank">
                    <q-btn flat>
                        <img class="responsive" src="statics/gch.png" alt="Genesis Community Health Logo">
                    </q-btn>
                </a>
            </div>
            <div class="offset-sm-2 col-sm-4 offset-xs-1 col-xs-5">
                <a href="https://boiserm.org/" target="_blank">
                    <q-btn flat>
                        <img class="responsive" src="statics/brm.png" alt="Boise Rescue Mission Logo">
                    </q-btn>
                </a>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QTransition,
        QBtn,
        BackToTop,
        Ripple,
        QFixedPosition,
        QIcon
    } from 'quasar'
    export default {
        name: 'About',
        data() {
            return {}
        },
        components: {
            QLayout,
            QTransition,
            QBtn,
            QFixedPosition,
            QIcon
        },
        directives: {
            BackToTop,
            Ripple
        }
    }
</script>

<style scoped>
    .back{
        background-color: transparent;
    }
    .top {
        font-size: 1.25rem;
    }

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
        /* background-color: rgb(206, 201, 201); */
        background-image: url("~statics/triangular.png")
    }

    .return {
        background-color: red;
    }
</style>