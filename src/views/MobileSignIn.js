import React from 'react';
import '../styles.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, addRegistryId } from '../store';
import axios from 'axios';
import { Flex, Button, Stack, FormControl, FormLabel, FormHelperText, Input, Spinner, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import Loader from '../components/Loader';
import ThingsToConsider from '../data/ThingsToConsider';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
    }
};

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(250, 0, 250, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgb(97, 202, 146)",
        transition: {
            duration: 4,
            ease: "easeInOut",
        }
    }
};

function MobileSignIn() {
    const dispatch = useDispatch();
    const [ loader, setLoader ] = useState(false);

    const { index, email } = useSelector((state) => {
        return {
        index: state.index.index,
        email: state.index.registry.email,
        }
    })

    const addUser = async () => {
        console.log('adduser clicked');
        setLoader(true);
        const response = await axios.post('https://osar-api.onrender.com/users', {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'POST',
            },
            email: email
        });
        console.log(response);
        const userId = response.data.data._id;

        dispatch(addRegistryId(userId));
        dispatch(changeIndex(parseInt(index + 1)));
    };

    console.log({email});

    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

    return (
        <Flex className='Osar'>
            <Stack className='mobile-sign-in'>
                    <Flex justify='center' >
                        <motion.div className="mobile-sign-in2">
                            <center>
                        <Flex justifyContent='center' paddingTop={100}>
                            <Text fontSize='4xl' color='white'>DVAA</Text>
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="550" height="250">
                                <motion.path
                                  d="M8.37606 14.0201C11.0176 12.4792 13.9641 11.712 17.204 11.712C20.0152 11.712 22.6354 12.3715 25.0563 13.6914C26.9442 14.6873 28.4938 15.944 29.696 17.4633V0H36.584V48.36H29.696V42.9764C28.5732 44.5031 27.1167 45.804 25.3344 46.88L25.3285 46.8836C22.9793 48.2577 20.244 48.936 17.14 48.936C13.9388 48.936 11.0119 48.1454 8.37075 46.5607L8.36756 46.5588C5.76799 44.9726 3.72298 42.7483 2.23295 39.8997C0.7402 37.046 0 33.8073 0 30.196C0 26.5441 0.739384 23.3243 2.23524 20.5519C3.72635 17.7457 5.7726 15.5645 8.3729 14.022L8.37606 14.0201ZM2.676 20.788C1.22533 23.476 0.5 26.612 0.5 30.196C0.5 33.7373 1.22533 36.8947 2.676 39.668C4.12667 42.4413 6.11067 44.596 8.628 46.132C11.188 47.668 14.0253 48.436 17.14 48.436C20.1693 48.436 22.8147 47.7747 25.076 46.452C27.0303 45.2721 28.5703 43.8213 29.696 42.0997C29.8729 41.8291 30.0396 41.5519 30.196 41.268V47.86H36.084V0.5H30.196V19.06C30.0383 18.799 29.8717 18.5447 29.696 18.2969C28.493 16.6 26.8677 15.2117 24.82 14.132C22.4733 12.852 19.9347 12.212 17.204 12.212C14.0467 12.212 11.188 12.9587 8.628 14.452C6.11067 15.9453 4.12667 18.0573 2.676 20.788ZM23.9883 19.2976C22.2771 18.2791 20.3821 17.768 18.292 17.768C16.1981 17.768 14.3004 18.2597 12.5881 19.2381C10.8834 20.2122 9.51741 21.6347 8.49131 23.5228C7.47122 25.3997 6.952 27.6187 6.952 30.196C6.952 32.8162 7.47133 35.0787 8.49234 36.9991C9.51837 38.8863 10.885 40.3311 12.5919 41.3481C14.3032 42.3251 16.1997 42.816 18.292 42.816C20.3853 42.816 22.2825 42.3246 23.9944 41.3467C25.7442 40.329 27.1308 38.8842 28.1556 36.9992C29.1772 35.0777 29.696 32.8361 29.696 30.26C29.696 27.6827 29.1768 25.4637 28.1567 23.5868C27.1322 21.7017 25.7471 20.2795 24.0003 19.3046L23.9883 19.2976ZM28.596 37.236C27.5293 39.1987 26.0787 40.7133 24.244 41.78C22.452 42.804 20.468 43.316 18.292 43.316C16.116 43.316 14.132 42.804 12.34 41.78C10.548 40.7133 9.11867 39.1987 8.052 37.236C6.98533 35.2307 6.452 32.884 6.452 30.196C6.452 27.5507 6.98533 25.2467 8.052 23.284C9.11867 21.3213 10.548 19.828 12.34 18.804C14.132 17.78 16.116 17.268 18.292 17.268C20.468 17.268 22.452 17.8013 24.244 18.868C26.0787 19.892 27.5293 21.3853 28.596 23.348C29.6627 25.3107 30.196 27.6147 30.196 30.26C30.196 32.9053 29.6627 35.2307 28.596 37.236ZM52.0192 46.6331L52.0162 46.6314C49.2888 45.0917 47.1335 42.9128 45.5542 40.1051L45.5497 40.0971C44.0115 37.2405 43.25 33.9568 43.25 30.26C43.25 26.6027 44.0344 23.3586 45.6182 20.5429L45.6195 20.5406C47.2418 17.6906 49.4409 15.5105 52.214 14.0134C54.9816 12.4764 58.0734 11.712 61.478 11.712C64.8827 11.712 67.9745 12.4765 70.7422 14.0134C73.5135 15.5097 75.6919 17.6677 77.2724 20.4764C78.9002 23.2933 79.706 26.56 79.706 30.26C79.706 33.9632 78.8775 37.252 77.2064 40.1111C75.5825 42.9196 73.3618 45.0969 70.5499 46.6347C67.7406 48.171 64.6279 48.936 61.222 48.936C57.8577 48.936 54.7865 48.1705 52.0192 46.6331ZM76.774 39.86C78.3953 37.0867 79.206 33.8867 79.206 30.26C79.206 26.6333 78.4167 23.4547 76.838 20.724C75.302 17.9933 73.19 15.9027 70.502 14.452C67.814 12.9587 64.806 12.212 61.478 12.212C58.15 12.212 55.142 12.9587 52.454 14.452C49.766 15.9027 47.6327 18.0147 46.054 20.788C44.518 23.5187 43.75 26.676 43.75 30.26C43.75 33.8867 44.4967 37.0867 45.99 39.86C47.526 42.5907 49.6167 44.7027 52.262 46.196C54.95 47.6893 57.9367 48.436 61.222 48.436C64.55 48.436 67.5793 47.6893 70.31 46.196C73.0407 44.7027 75.1953 42.5907 76.774 39.86ZM71.0948 37.1749C72.1922 35.3052 72.754 33.008 72.754 30.26C72.754 27.509 72.2123 25.2091 71.1547 23.338C70.0872 21.4493 68.7031 20.0719 67.006 19.1829L66.9978 19.1786C65.2812 18.2386 63.4228 17.768 61.414 17.768C59.3608 17.768 57.4812 18.2393 55.7662 19.1785L55.7624 19.1806C54.1094 20.0676 52.7675 21.4426 51.7413 23.3308C50.7235 25.2035 50.202 27.5061 50.202 30.26C50.202 33.0589 50.7031 35.384 51.6793 37.2568C52.7051 39.143 54.0475 40.5401 55.7025 41.4696C57.3742 42.3657 59.211 42.816 61.222 42.816C63.2308 42.816 65.1124 42.3454 66.8742 41.4031C68.6182 40.4702 70.024 39.0693 71.0907 37.182L71.0948 37.1749ZM55.462 41.908C53.7127 40.9267 52.3047 39.4547 51.238 37.492C50.214 35.5293 49.702 33.1187 49.702 30.26C49.702 27.444 50.2353 25.0547 51.302 23.092C52.3687 21.1293 53.7767 19.6787 55.526 18.74C57.318 17.7587 59.2807 17.268 61.414 17.268C63.5047 17.268 65.446 17.7587 67.238 18.74C69.03 19.6787 70.4807 21.1293 71.59 23.092C72.6993 25.0547 73.254 27.444 73.254 30.26C73.254 33.076 72.678 35.4653 71.526 37.428C70.4167 39.3907 68.9447 40.8627 67.11 41.844C65.2753 42.8253 63.3127 43.316 61.222 43.316C59.1313 43.316 57.2113 42.8467 55.462 41.908ZM117.829 37.096C116.851 40.4488 115.019 43.1621 112.336 45.236C109.52 47.3693 106 48.436 101.775 48.436C98.4475 48.436 95.4822 47.6893 92.8795 46.196C90.3195 44.7027 88.3142 42.5907 86.8635 39.86C85.4128 37.1293 84.6875 33.9293 84.6875 30.26C84.6875 26.6333 85.4128 23.476 86.8635 20.788C88.3142 18.0573 90.3195 15.9453 92.8795 14.452C95.4822 12.9587 98.4475 12.212 101.775 12.212C106.085 12.212 109.626 13.2573 112.4 15.348C115.088 17.3439 116.901 20.0785 117.84 23.552C117.884 23.717 117.927 23.8837 117.967 24.052H111.696C111.098 21.9187 109.925 20.2333 108.176 18.996C106.469 17.7587 104.336 17.14 101.775 17.14C98.4475 17.14 95.7595 18.292 93.7115 20.596C91.6635 22.8573 90.6395 26.0787 90.6395 30.26C90.6395 34.484 91.6635 37.748 93.7115 40.052C95.7595 42.356 98.4475 43.508 101.775 43.508C104.336 43.508 106.469 42.9107 108.176 41.716C109.882 40.5213 111.056 38.8147 111.696 36.596H117.967C117.923 36.7642 117.877 36.9309 117.829 37.096ZM112.699 14.9479C115.617 17.1146 117.533 20.1205 118.454 23.9347L118.603 24.552H111.316L111.214 24.1868C110.647 22.16 109.539 20.5728 107.887 19.4042L107.882 19.4008C106.278 18.2376 104.253 17.64 101.775 17.64C98.5775 17.64 96.0301 18.7401 94.0852 20.9282L94.0821 20.9317C92.144 23.0717 
                                  91.1395 26.1564 91.1395 30.26C91.1395 34.4071 92.1445 37.5365 94.0852 39.7198C96.0301 41.9079 98.5775 43.008 101.775 43.008C104.257 43.008 106.284 42.4299 107.889 41.3064C109.492 40.1844 110.603 38.5789 111.215 36.4574L111.319 36.096H118.615L118.451 36.7227C117.486 40.4088 115.548 43.3852 112.641 45.6316L112.637 45.6346C109.719 47.8459 106.087 48.936 101.775 48.936C98.3699 48.936 95.3171 48.1711 92.6307 46.6297L92.6276 46.6279C89.9837 45.0856 87.9143 42.9036 86.4219 40.0946C84.9263 37.2793 84.1875 33.9959 84.1875 30.26C84.1875 26.5667 84.9264 23.3253 86.4226 20.5522C87.9149 17.7437 89.9841 15.5622 92.6276 14.0201L92.6307 14.0183C95.3171 12.4769 98.3699 11.712 101.775 11.712C106.166 11.712 109.82 12.778 112.699 14.9479ZM157.342 12.288V48.36H150.519V44.2297C149.468 45.5015 148.151 46.54 146.574 47.3453L146.57 47.3472C144.532 48.3663 142.278 48.872 139.818 48.872C137.018 48.872 134.486 48.3027 132.231 47.1535L132.225 47.1499C129.959 45.9507 128.164 44.1739 126.839 41.8343L126.836 41.828C125.549 39.4765 124.919 36.6373 124.919 33.332V12.288H131.678V32.564C131.678 35.9369 132.531 38.4647 134.166 40.2212C135.803 41.9364 138.05 42.816 140.971 42.816C143.975 42.816 146.285 41.8947 147.965 40.0948C149.641 38.2987 150.519 35.6452 150.519 32.052V12.288H157.342ZM133.803 40.564C132.053 38.6867 131.178 36.02 131.178 32.564V12.788H125.419V33.332C125.419 36.5747 126.037 39.3267 127.275 41.588C128.555 43.8493 130.283 45.556 132.458 46.708C134.635 47.8173 137.088 48.372 139.818 48.372C142.208 48.372 144.384 47.8813 146.346 46.9C148.067 46.0215 149.458 44.8604 150.519 43.4166C150.694 43.1775 150.861 42.9306 151.019 42.676V47.86H156.842V12.788H151.019V32.052C151.019 35.7213 150.122 38.516 148.331 40.436C146.538 42.356 144.085 43.316 140.971 43.316C137.941 43.316 135.552 42.3987 133.803 40.564ZM223.56 48.36H216.8V28.02C216.8 24.6003 215.946 22.0762 214.314 20.365L214.306 20.3564C212.71 18.6004 210.528 17.704 207.7 17.704C204.789 17.704 202.521 18.6412 200.837 20.4851L200.834 20.4892C199.157 22.2853 198.28 24.9388 198.28 28.532V48.36H191.52V28.02C191.52 24.6003 190.666 22.0762 189.034 20.365L189.026 20.3564C187.43 18.6004 185.248 17.704 182.42 17.704C179.509 17.704 177.241 18.6412 175.557 20.4851L175.554 20.4892C173.877 22.2853 173 24.9388 173 28.532V48.36H166.176V12.288H173V16.2909C174.061 14.9941 175.355 13.9544 176.88 13.1748L176.884 13.1728C178.921 12.1544 181.153 11.648 183.572 11.648C186.594 11.648 189.285 12.3276 191.632 13.7004C193.687 14.9024 195.283 16.5945 196.42 18.7628C197.46 16.6669 199.003 14.9988 201.042 13.768C203.385 12.3532 205.992 11.648 208.852 11.648C211.654 11.648 214.168 12.2393 216.382 13.4342C218.608 14.5926 220.362 16.3515 221.643 18.692C222.929 21.0435 223.56 23.8827 223.56 27.188V48.36ZM216.148 13.876C214.015 12.724 211.583 12.148 208.852 12.148C206.079 12.148 203.561 12.8307 201.3 14.196C199.233 15.4442 197.7 17.1561 196.703 19.3316C196.609 19.5356 196.52 19.7438 196.436 19.956C196.345 19.7461 196.25 19.5404 196.152 19.3388C195.046 17.0818 193.456 15.3462 191.38 14.132C189.119 12.8093 186.516 12.148 183.572 12.148C181.225 12.148 179.071 12.6387 177.108 13.62C175.454 14.4656 174.084 15.628 173 17.1073C172.826 17.3447 172.659 17.5903 172.5 17.844V12.788H166.676V47.86H172.5V28.532C172.5 24.8627 173.396 22.068 175.188 20.148C176.98 18.1853 179.391 17.204 182.42 17.204C185.364 17.204 187.689 18.1427 189.396 20.02C191.145 21.8547 192.02 24.5213 192.02 28.02V47.86H197.78V28.532C197.78 24.8627 198.676 22.068 200.468 20.148C202.26 18.1853 204.671 17.204 207.7 17.204C210.644 17.204 212.969 18.1427 214.676 20.02C216.425 21.8547 217.3 24.5213 217.3 28.02V47.86H223.06V27.188C223.06 23.9453 222.441 21.1933 221.204 18.932C219.967 16.6707 218.281 14.9853 216.148 13.876ZM264.872 33H236.93C237.219 36.0944 238.334 38.4975 240.244 40.2566C242.322 42.0886 244.825 43.008 247.782 43.008C250.221 43.008 252.205 42.4507 253.767 41.3702C255.388 40.2357 256.517 38.7428 257.165 36.8797L257.282 36.544H264.568L264.391 37.1781C263.423 40.6553 261.482 43.4998 258.579 45.6985L258.576 45.7015C255.658 47.8677 252.049 48.936 247.782 48.936C244.376 48.936 241.303 48.1711 238.576 46.6314L238.573 46.6297C235.887 45.0887 233.775 42.9083 232.239 40.0999L232.237 40.0971C230.699 37.2405 229.938 33.9568 229.938 30.26C229.938 26.5657 230.677 23.3039 232.172 20.4894C233.666 17.6774 235.759 15.5152 238.449 14.0158C241.178 12.4756 244.294 11.712 247.782 11.712C251.184 11.712 254.215 12.4544 256.86 13.953C259.5 15.4489 261.53 17.5214 262.94 20.1642C264.393 22.763 265.113 25.7058 265.113 28.98C265.113 30.1084 265.048 31.299 264.919 32.5514L264.872 33ZM262.501 20.404C261.136 17.844 259.173 15.8387 256.613 14.388C254.053 12.9373 251.109 12.212 247.782 12.212C244.368 12.212 241.339 12.9587 238.693 14.452C236.091 15.9027 234.064 17.9933 232.613 20.724C231.163 23.4547 230.438 26.6333 230.438 30.26C230.438 33.8867 231.184 37.0867 232.678 39.86C234.171 42.5907 236.219 44.7027 238.822 46.196C241.467 47.6893 244.454 48.436 247.782 48.436C251.963 48.436 255.461 47.3907 258.277 45.3C260.953 43.2731 262.781 40.6878 263.762 37.544C263.813 37.3789 263.863 37.2122 263.909 37.044H257.637C256.955 39.0067 255.76 40.5853 254.054 41.78C252.389 42.932 250.299 43.508 247.782 43.508C244.71 43.508 242.085 42.548 239.91 40.628C237.88 38.761 236.719 36.2183 236.428 33C236.413 32.8351 236.4 32.6684 236.389 32.5H264.421C264.549 31.2627 264.613 30.0893 264.613 28.98C264.613 25.78 263.909 22.9213 262.501 20.404ZM256.701 22.332L256.698 22.3269C255.767 20.789 254.497 19.6402 252.879 18.8716L252.872 18.8684L252.865 18.8649C251.278 18.0511 249.502 17.64 247.525 17.64C244.699 17.64 242.303 18.5367 240.31 20.3263C238.483 22.0016 237.373 24.2994 237.009 27.264H258.089C258.02 25.3384 257.551 23.7003 256.701 22.332ZM258.589 27.264C258.595 
                                  27.4288 258.597 27.5955 258.597 27.764H236.454C236.469 27.5955 236.486 27.4288 236.506 27.264C236.873 24.1743 238.029 21.7383 239.973 19.956C242.064 18.0787 244.581 17.14 247.525 17.14C249.574 17.14 251.43 17.5667 253.094 18.42C254.8 19.2307 256.144 20.4467 257.125 22.068C258.032 23.5268 258.52 25.2588 258.589 27.264ZM304.225 48.36H297.465V28.02C297.465 24.6003 296.611 22.0762 294.979 20.365L294.975 20.3609C293.338 18.6034 291.091 17.704 288.173 17.704C285.216 17.704 282.903 18.6227 281.178 20.4261C279.502 22.2222 278.625 24.8754 278.625 28.468V48.36H271.801V12.288H278.625V16.258C279.696 14.9814 281.014 13.9526 282.573 13.1728L282.577 13.1709C284.656 12.1538 286.929 11.648 289.389 11.648C293.765 11.648 297.354 12.9866 300.107 15.6945C302.876 18.3761 304.225 22.2349 304.225 27.188V48.36ZM299.757 16.052C297.112 13.4493 293.656 12.148 289.389 12.148C287 12.148 284.802 12.6387 282.797 13.62C281.105 14.4659 279.714 15.6131 278.625 17.0614C278.451 17.2932 278.284 17.5327 278.125 17.78V12.788H272.301V47.86H278.125V28.468C278.125 24.7987 279.021 22.004 280.813 20.084C282.648 18.164 285.101 17.204 288.173 17.204C291.202 17.204 293.592 18.1427 295.341 20.02C297.09 21.8547 297.965 24.5213 297.965 28.02V47.86H303.725V27.188C303.725 22.324 302.402 18.612 299.757 16.052ZM329.994 42.432V48.36H324.246C320.936 48.36 318.361 47.5987 316.612 45.9878C314.843 44.3584 314.018 41.7373 314.018 38.26V18.088H309.474V12.288H314.018V3.456H320.842V12.288H329.994V18.088H320.842V38.26C320.842 39.9121 321.196 40.9621 321.778 41.5489C322.362 42.0938 323.455 42.432 325.206 42.432H329.994ZM321.43 41.908C320.705 41.1827 320.342 39.9667 320.342 38.26V17.588H329.494V12.788H320.342V3.956H314.518V12.788H309.974V17.588H314.518V38.26C314.518 41.6733 315.329 44.1267 316.951 45.62C318.572 47.1133 321.004 47.86 324.246 47.86H329.494V42.932H325.206C323.414 42.932 322.156 42.5907 321.43 41.908ZM368.81 33H340.867C341.156 36.0944 342.272 38.4975 344.182 40.2566C346.26 42.0886 348.763 43.008 351.719 43.008C354.159 43.008 356.143 42.4507 357.704 41.3702C359.325 40.2357 360.455 38.7428 361.103 36.8797L361.22 36.544H368.505L368.329 37.1781C367.36 40.6553 365.419 43.4998 362.517 45.6985L362.513 45.7015C359.595 47.8677 355.986 48.936 351.719 48.936C348.313 48.936 345.241 48.1711 342.513 46.6314L342.51 46.6297C339.824 45.0887 337.712 42.9083 336.176 40.0999L336.175 40.0971C334.637 37.2405 333.875 33.9568 333.875 30.26C333.875 26.5657 334.614 23.3039 336.109 20.4894C337.603 17.6771 339.697 15.5147 342.388 14.0153C345.116 12.4754 348.231 11.712 351.719 11.712C355.122 11.712 358.153 12.4544 360.797 13.953C363.437 15.4489 365.467 17.5214 366.878 20.1642C368.33 22.763 369.051 25.7058 369.051 28.98C369.051 30.1084 368.986 31.299 368.856 32.5514L368.81 33ZM366.439 20.404C365.074 17.844 363.111 15.8387 360.551 14.388C357.991 12.9373 355.047 12.212 351.719 12.212C348.306 12.212 345.276 12.9587 342.631 14.452C340.028 15.9027 338.002 17.9933 336.551 20.724C335.1 23.4547 334.375 26.6333 334.375 30.26C334.375 33.8867 335.122 37.0867 336.615 39.86C338.108 42.5907 340.156 44.7027 342.759 46.196C345.404 47.6893 348.391 48.436 351.719 48.436C355.9 48.436 359.399 47.3907 362.215 45.3C364.89 43.2731 366.719 40.6878 367.699 37.544C367.751 37.3789 367.8 37.2122 367.847 37.044H361.575C360.892 39.0067 359.698 40.5853 357.991 41.78C356.327 42.932 354.236 43.508 351.719 43.508C348.647 43.508 346.023 42.548 343.847 40.628C341.818 38.761 340.657 36.2183 340.365 33C340.35 32.8351 340.337 32.6684 340.327 32.5H368.359C368.487 31.2627 368.551 30.0893 368.551 28.98C368.551 25.78 367.847 22.9213 366.439 20.404ZM360.638 22.332L360.635 22.3269C359.704 20.789 358.434 19.6402 356.816 18.8716L356.81 18.8684L356.803 18.8649C355.216 18.0511 353.439 17.64 351.463 17.64C348.636 17.64 346.24 18.5369 344.246 20.3269C342.42 22.0022 341.31 24.2998 340.947 27.264H362.026C361.958 25.3384 361.489 23.7003 360.638 22.332ZM362.526 27.264C362.532 27.4288 362.535 27.5955 362.535 27.764H340.391C340.406 27.5955 340.423 27.4288 340.443 27.264C340.811 24.1743 341.967 21.7383 343.911 19.956C346.002 18.0787 348.519 17.14 351.463 17.14C353.511 17.14 355.367 17.5667 357.031 18.42C358.738 19.2307 360.082 20.4467 361.063 22.068C361.97 23.5268 362.458 25.2588 362.526 27.264ZM381.935 14.022L381.939 14.0201C384.58 12.4792 387.527 11.712 390.766 11.712C393.578 11.712 396.198 12.3716 398.619 13.6915C400.507 14.6874 402.056 15.944 403.258 17.4633V0H410.146V48.36H403.258V42.9764C402.136 44.5032 400.679 45.804 398.897 46.88L398.891 46.8836C396.542 48.2577 393.806 48.936 390.702 48.936C387.501 48.936 384.574 48.1454 381.933 46.5607L381.93 46.5588C379.33 44.9726 377.285 42.7483 375.795 39.8997C374.303 37.046 373.562 33.8073 373.562 30.196C373.562 26.5435 374.302 23.3232 375.798 20.5505C377.29 17.745 379.336 15.5643 381.935 14.022ZM403.258 42.0997C403.435 41.8291 403.602 41.5519 403.758 41.268V47.86H409.646V0.5H403.758V19.06C403.601 18.799 403.434 18.5447 403.258 18.2969C402.055 16.6 400.43 15.2117 398.382 14.132C396.036 12.852 393.497 12.212 390.766 12.212C387.609 12.212 384.75 12.9587 382.19 14.452C379.673 15.9453 377.689 18.0573 376.238 20.788C374.788 23.476 374.062 26.612 374.062 30.196C374.062 33.7373 374.788 36.8947 376.238 39.668C377.689 42.4413 379.673 44.596 382.19 46.132C384.75 47.668 387.588 48.436 390.702 48.436C393.732 48.436 396.377 47.7747 398.638 46.452C400.593 45.2721 402.133 43.8213 403.258 42.0997ZM397.563 19.3046L397.551 19.2978C395.84 18.2791 393.945 17.768 391.854 17.768C389.761 17.768 387.863 18.2597 386.151 19.2381C384.446 20.2122 383.08 21.6347 382.054 23.5228C381.034 25.3997 380.514 27.6187 380.514 30.196C380.514 32.8155 381.034 35.0775 382.054 36.9976C383.08 38.8857 384.447 40.3311 386.155 41.3483C387.866 42.3251 389.762 42.816 391.854 42.816C393.948 42.816 395.845 42.3246 397.557 41.3466C399.306 40.3291 400.693 38.8846 401.718 37.0002C402.74 35.0785 403.258 32.8365 403.258 30.26C403.258 27.6827 402.739 25.4637 401.719 23.5868C400.695 21.7017 399.31 20.2795 397.563 19.3046ZM402.158 37.236C401.092 39.1987 399.641 40.7133 397.806 41.78C396.014 42.804 394.03 43.316 391.854 43.316C389.678 43.316 387.694 42.804 385.902 41.78C384.11 40.7133 382.681 39.1987 381.615 37.236C380.548 35.2307 380.014 32.884 380.014 30.196C380.014 27.5507 380.548 25.2467 381.615 23.284C382.681 21.3213 384.11 19.828 385.902 18.804C387.694 17.78 389.678 17.268 391.854 17.268C394.03 17.268 396.014 17.8013 397.806 18.868C399.641 19.892 401.092 21.3853 402.158 23.348C403.225 25.3107 403.758 27.6147 403.758 30.26C403.758 32.9053 403.225 35.2307 402.158 37.236Z"
                                  fill="transparent"
                                  strokeWidth="2"
                                  stroke="rgba(255, 255, 255, 0.69)"
                                  strokeLinecap="round"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  variants={pathVariants}
                                />
                                <motion.path
                                  d="M34.968 192.248L56.728 132.856H69.144L41.624 203H28.056L0.536011 132.856H13.08L34.968 192.248Z" 
                                  fill="transparent"
                                  strokeWidth="2"
                                  stroke="rgba(255, 255, 255, 0.69)"
                                  strokeLinecap="round"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={transition}
                                />
                              </svg>
                              <motion.div
                                className="box"
                                initial={{ offsetDistance: "0%", scale: 2.5 }}
                                animate={{ offsetDistance: "100%", scale: 1 }}
                                transition={transition}
                              /> */}
                            </Flex>
                            <Flex className='signin-container2'>
                        <Text fontSize='24px' color='white'>Documented Voices</Text>
                    </Flex>
 
                    <center>
                    <Flex className='mobile-sign-in3'>
                        <FormControl >
                            <FormLabel color='rgb(97, 202, 146)'>Email address</FormLabel>
                                <InputGroup>
                                  <InputLeftElement pointerEvents='none'>
                                    <EmailIcon />
                                  </InputLeftElement>
                                <Input 
                                  value={email}
                                  bg='white'
                                  onChange={(e) => {dispatch(addEmail( e.target.value))}}
                                  rules={[
                                      {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                      },
                                      {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                      },
                                    ]}
                                  />
                                </InputGroup>
                                { loader ? <Loader /> : ""}
                                <Text color='white'>{ loader ? 'Starting Registry' : ""}</Text>
                                
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                            <Flex className='signin-container2'>
                                <Button onClick={addUser}>
                                    Create Registry
                                </Button>
                            </Flex>
                    </Flex>
                </center>
                            </center>
                        </motion.div>
                    </Flex>
                    </Stack>
        </Flex>
    )
}

export default MobileSignIn;
