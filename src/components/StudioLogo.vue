<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useLogoAnimation } from '@/composables/useLogoAnimation'

const { logoAnimationPlayed, setLogoAnimationPlayed } = useLogoAnimation()
let timer: ReturnType<typeof setTimeout>

onMounted(() => {
    if (!logoAnimationPlayed.value) {
        // Animation max duration is roughly 3.8s + Slogan animation ~1.5s
        // We wait for both to finish before locking the state to avoid cutting off the slogan fade-in.
        timer = setTimeout(() => {
            setLogoAnimationPlayed()
        }, 5500)
    }
})

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
    if (!logoAnimationPlayed.value) {
        setLogoAnimationPlayed()
    }
})
</script>

<template>
    <svg class="studio-logo" :class="{ 'played': logoAnimationPlayed }" xmlns="http://www.w3.org/2000/svg"
        width="100%" height="100%" viewBox="0 0 314 51">
        <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml"
                style="display: flex; align-items: center; height: 100%; justify-content: center;">
                <div style="display: inline-flex; align-items: center; margin: 0 -8px 0 -4px;"><svg
                        style="display: inline-block; width: 58px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 58 51" height="51" width="58">
                        <path stroke-dasharray="235" stroke-dashoffset="235" style="animation: draw 0.94s 0s forwards ease-in;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M12.0195 45.3685C19.1859 32.3806 23.0999 25.7226 32.0203 11.3685C21.5205 20.8685 5.01953 34.2139 1.01953 30.7139C6.01953 17.2138 71.5195 -7.28639 53.5188 13.7136C43.6613 25.2136 12.0195 41.7136 14.0195 38.2136C37.0871 17.3054 32.9838 44.188 46.7608 39.6997">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 0;"><svg
                        style="display: inline-block; width: 11px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 11 51" height="51" width="11">
                        <path stroke-dasharray="22" stroke-dashoffset="22" style="animation: draw 0.09s 0.94s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M3.07713 25.3392C3.03314 27.7282 6.78706 24.9554 6.03999 23.505C4.44172 21.2653 -0.294204 28.3892 2.71291 28.2186C5.35941 27.9626 10.2422 24.7207 10.2422 24.7207">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 -4px;"><svg
                        style="display: inline-block; width: 14px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 51" height="51" width="14">
                        <path stroke-dasharray="32" stroke-dashoffset="32" style="animation: draw 0.13s 1.03s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M8.95035 23.3347C8.289 21.833 5.66489 23.7794 5.71956 28.8314C5.77422 33.8834 1.12107 35.424 0.98514 33.3617C0.883641 31.4008 3.52325 32.4975 12.6583 24.7513">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -12.5px 0 -3.5px;"><svg
                        style="display: inline-block; width: 24px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 51" height="51" width="24">
                        <path stroke-dasharray="91" stroke-dashoffset="91" style="animation: draw 0.36s 1.16s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M0.966797 16.3342C6.66806 14.1572 15.5438 14.1786 22.957 15.9795C12.1532 14.4252 15.852 9.92493 18.1685 5.96021C9.87226 17.3225 -0.709346 36.7351 1.78362 36.9101C3.40185 37.0413 9.39371 29.0376 13.8793 24.8435">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 0;"><svg
                        style="display: inline-block; width: 13px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 13 51" height="51" width="13">
                        <path stroke-dasharray="36" stroke-dashoffset="36" style="animation: draw 0.14s 1.52s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -3px 0 -1px;"><svg
                        style="display: inline-block; width: 13px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 13 51" height="51" width="13">
                        <path stroke-dasharray="24" stroke-dashoffset="24" style="animation: draw 0.10s 1.66s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M4.04688 23.3381L1.02539 30.1005C7.1047 22.5828 11.8527 19.8132 11.2412 24.1654"></path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -12.5px 0 -3.5px;"><svg
                        style="display: inline-block; width: 24px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 51" height="51" width="24">
                        <path stroke-dasharray="91" stroke-dashoffset="91" style="animation: draw 0.36s 1.76s forwards ease-out;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M0.966797 16.3342C6.66806 14.1572 15.5438 14.1786 22.957 15.9795C12.1532 14.4252 15.852 9.92493 18.1685 5.96021C9.87226 17.3225 -0.709346 36.7351 1.78362 36.9101C3.40185 37.0413 9.39371 29.0376 13.8793 24.8435">
                        </path>
                    </svg></div>
                <div style="width: 7px;"></div>
                <div style="display: inline-flex; align-items: center; margin: 0 0px 0 -6px;"><svg
                        style="display: inline-block; width: 40px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 40 51" height="51" width="40">
                        <path stroke-dasharray="145" stroke-dashoffset="145"
                            style="animation: draw 0.58s 2.12s forwards ease-in;" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round"
                            d="M37.4677 13.6689C40.3847 3.01441 37.7852 1.4925 29.7299 4.91693C7.78844 14.6201 -4.26276 42.3972 4.55267 46.0754C13.3681 49.7537 42.3496 30.9185 34.1686 26.4792C29.0318 23.8791 9.56239 45.1242 14.3821 47.6611">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 0;"><svg
                        style="display: inline-block; width: 13px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 13 51" height="51" width="13">
                        <path stroke-dasharray="36" stroke-dashoffset="36" style="animation: draw 0.14s 2.70s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -5px 0 0;"><svg
                        style="display: inline-block; width: 19px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 19 51" height="51" width="19">
                        <path stroke-dasharray="43" stroke-dashoffset="43" style="animation: draw 0.17s 2.85s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M4.23047 23.5026L0.871094 29.4474C3.50472 25.5411 6.75255 22.8947 9.44272 21.6504C7.06863 25.4683 5.83806 27.9029 6.63039 28.2444C7.09897 28.3943 7.92245 27.8359 12.5443 24.6228C11.5082 26.1726 11.4655 26.753 11.9412 27.2936C12.31 27.6478 13.3286 27.1883 17.2828 24.5797">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 0;"><svg
                        style="display: inline-block; width: 11px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 11 51" height="51" width="11">
                        <path stroke-dasharray="22" stroke-dashoffset="22" style="animation: draw 0.09s 3.02s forwards ease-out;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M3.07713 25.3392C3.03314 27.7282 6.78706 24.9554 6.03999 23.505C4.44172 21.2653 -0.294204 28.3892 2.71291 28.2186C5.35941 27.9626 10.2422 24.7207 10.2422 24.7207">
                        </path>
                    </svg></div>
                <div style="width: 7px;"></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -7px 0 -5px;"><svg
                        style="display: inline-block; width: 30px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 30 51" height="51" width="30">
                        <path stroke-dasharray="83" stroke-dashoffset="83" style="animation: draw 0.33s 3.11s forwards ease-in;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M28.5059 3.6123C19.5058 9.1123 -1.12359 39.6123 1.00666 46.6123C2.22398 50.6123 28.5059 38.6123 28.5059 38.6123">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -4px 0 0;"><svg
                        style="display: inline-block; width: 13px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 13 51" height="51" width="13">
                        <path stroke-dasharray="36" stroke-dashoffset="36" style="animation: draw 0.14s 3.44s forwards linear;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466">
                        </path>
                    </svg></div>
                <div style="display: inline-flex; align-items: center; margin: 0 -6px 0 -1.5px;"><svg
                        style="display: inline-block; width: 17px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 17 51" height="51" width="17">
                        <path stroke-dasharray="64" stroke-dashoffset="64" style="animation: draw 0.26s 3.58s forwards ease-out;"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            d="M15.9206 5.40527L2.07203 28.8782C1.02375 28.8035 6.74541 22.7468 8.7643 23.9805C10.5595 25.4012 1.88642 33.589 1.17541 32.0187C0.464395 30.4485 9.73655 25.9621 13.9253 24.7283">
                        </path>
                    </svg></div>
            </div>
        </foreignObject>
    </svg>
</template>

<style scoped>
.studio-logo.played :deep(path) {
    animation: none !important;
    stroke-dashoffset: 0 !important;
}

.studio-logo {
    /* SVG has native viewBox 0 0 314 51. 
     We let it scale naturally but limit max width */
    width: 90%;
    max-width: 900px;
    height: auto;
    color: rgb(var(--mdui-color-primary));
    /* This controls the currentColor stroke */
    margin: 1rem 0;
}
</style>

<style>
@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
