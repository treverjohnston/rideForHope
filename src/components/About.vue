<template>
    <q-layout class="about black">
        <div class="row wrap" id="app">
            <div class="col-xs-12 text-center desktop-only">
                <div class="row wrap justify-center white-back" id="number">
                        <input readonly class="text-output large-text text-bold col-xs-4" value="$0">
                    <h4 class="text-bold col-xs-9 text-center text-italic">Amount Raised by Ride For Hope Idaho With <u>YOUR</u> Help</h4>

                </div>
            </div>
            <div class="col-xs-12 text-center mobile-only">
                <div class="row wrap justify-center white-back" id="number">
                    <big>
                        <input readonly class="text-output text-bold col-xs-10 emphasize" value="$0">
                    </big>

                    <p class="text-bold col-xs-9 text-center text-italic">Amount Raised by Ride For Hope Idaho With <u>YOUR</u> Help</p>

                </div>
            </div>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10 ">
            <h2 class="text-bold offset-xs-1 col-xs-10 text-center text-italic">Our Mission</h2>
            <hr class="offset-sm-2 col-sm-8 return offset-xs-1 col-xs-10 ">
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
                    <li>In 2015 over $7,000 was donated.</li>
                    <li>In 2016 over $9,000 was donated.</li>
                    <li>In 2017 over $12,500 was donated.</li>
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
                <q-btn @click="launch('https://genesiscommunityhealth.com/about-us/')" flat>
                    <img class="responsive check" src="statics/gch.png" alt="Genesis Community Health Logo">
                </q-btn>
            </div>
            <div class="offset-sm-2 col-sm-4 offset-xs-1 col-xs-5">
                <q-btn @click="launch('https://boiserm.org/')" flat>
                    <img class="responsive check" src="statics/brm.png" alt="Boise Rescue Mission Logo">
                </q-btn>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import anime from "animejs";
    import {
        QLayout,
        QTransition,
        QBtn,
        BackToTop,
        Ripple,
        QFixedPosition,
        QIcon,
        openURL
    } from "quasar";
    export default {
        name: "About",
        data() {
            return {
                width: 500
            };
        },
        components: {
            QLayout,
            QTransition,
            QBtn,
            QFixedPosition,
            QIcon,
            openURL
        },
        directives: {
            BackToTop,
            Ripple
        },
        methods: {
            launch(url) {
                openURL(url);
            },
            animate() {
                anime({
                    targets: '#number input',
                    value: '$' + '28500',
                    round: 1,
                    easing: 'easeInOutExpo',
                    duration: 3333
                });
            }
        },
        mounted() {
            this.animate()
        }
    };
</script>

<style scoped>
    .white-back {
        background-color: rgba(255, 255, 255, 0.295);
        margin: 1rem 5rem 1rem 5rem;
        border-radius: 9px;
    }
    .large-text{
        font-size: 5rem;
    }

    .text-output {
        background-color: transparent;
        border: none;
        text-align: center;
        font-family: "Bellefair", serif;

    }

    .white {
        color: transparent;
    }

    .check {
        max-width: 30vw;
    }

    .back {
        background-color: transparent;
    }

    .top {
        font-size: 1.25rem;
    }

    .signature {
        color: rgb(180, 0, 0);
        font-family: "Niconne", cursive;
    }

    .rider {
        border: 5px solid black;
        height: 18rem;
        width: 18rem;
    }

    .about {
        background-image: url("~statics/triangular.png");
    }

    .return {
        background-color: red;
    }
</style>