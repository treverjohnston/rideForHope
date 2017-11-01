<template>
    <q-layout class="about">
        <q-transition appear enter="lightSpeedIn" leave="fadeOut">
            <div class="row wrap xs-gutter">
                <h1 class="offset-sm-3 col-sm-8 text-bold offset-xs-1 col-xs-10">About Us</h1>
                <hr class="offset-sm-3 col-sm-8 return offset-xs-1 col-xs-10">
                <div class="para offset-sm-3 col-sm-5 offset-xs-1 col-xs-10">
                    <p class="text-justify">
                        Ride For Hope is "gearing up" for our 4th annual fully supported bicycle charity event which will take place on June 23,
                        2018 . We are a small group of dedicated cyclists and volunteers who firmly believe that quality
                        healthcare, including mental healthcare. should be accessible to everyone. The event is unique in
                        that the full cost of the ride is completely funded by charitable contributions from local sponsors.
                        These sponsorships allow for 100% of participant registration fees and additional donations to go
                        directly to charity.
                    </p>
                    <p class="text-justify">
                        In 2015, after event costs ($2,000), over $7,000 was donated. In 2016, after event costs ($4,000), over $9,000 was donated.
                        In 2017, after event costs ($8,000), $12,500 was donated. In three years the event has raised over
                        $28,500 for charity. We are always striving to increase rider participation and funds raised and
                        in 2018 we are hoping to eclipse the marks set in 2017.
                    </p>
                </div>
                <div class="pic col-sm-4 col-xs-12 text-center">
                    <img class="rider" src="statics/rider.png" alt="rider">
                </div>
                <div class="paragroup offset-sm-3 col-sm-8 offset-xs-1 col-xs-10">
                    <p class="text-justify">
                        In 2017 funds raised included Canyon County Community Clinic, located in Caldwell, Idaho. Canyon County Community Clinic
                        is a non-profit clinic staffed by medical volunteers that helps improve quality of life for those
                        who are economically disadvantaged and without health insurance. The clinic provides quality health
                        care to patients at no cost. Financial eligibility for patients to be seen at the clinic is based
                        on household size and must be at less than twice the federal poverty level guidelines. The clinic
                        relies heavily on donations and and volunteers to continue to provide this free healthcare service.
                        In addition, a portion of funds were also donated to the Boise Rescue Mission "New Life Program"
                        which offers assessment, counseling and crisis management. Though this program, men, women, and children
                        whose lives have been damaged by their struggle with mental illness can work through their problems,
                        achieve stability, and begin to rebuild their lives.
                    </p>
                    <p class="text-justify">
                        In 2018 Ride For Hope will once again be supporting Canyon County Community Clinic and Boise Rescue Mission.
                    </p>
                    <p class="text-justify">
                        Ride For Hope is a small team comprised of volunteers and other charitable groups, including the Boise Rescue Mission, who
                        hope to do big things for these great causes. We welcome anyone who shares our vision to come partner
                        with us to help promote access to quality healthcare for everyone.
                    </p>
                    <p class="text-justify">
                        A huge thanks to all of you who have either participated or believe in the Ride For Hope cause.... individual cyclists, cycling
                        clubs and teams, sponsors, volunteers .... for your generosity, support, and help in transforming
                        the Ride For Hope vision into reality and helping us to raise awareness of these important ongoing
                        needs! Thank-You!
                    </p>
                </div>
            </div>
        </q-transition>
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