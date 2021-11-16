import { Button } from "./style";

function ButtonTheme() {
  return (
    <Button type="button">
      <svg width="64" height="64" viewBox="0 0 160 160" fill="none">
        <path d="M70.6726 0.513656C52.4877 2.90165 36.6749 10.4636 24.0246 22.8628C13.1076 33.5475 5.77898 46.4365 2.09944 61.4381C0.51815 67.8979 -0.0292172 72.8576 0.00119219 80.1133C0.0316016 93.2778 2.6164 104.116 8.54624 116.056C14.4761 127.934 23.8422 138.558 35.2762 146.273C50.5418 156.56 69.9123 161.519 87.3978 159.591C107.468 157.356 123.494 149.794 136.996 136.109C155.241 117.587 162.904 93.6454 159.012 66.9488C156.762 51.2739 147.791 34.0067 136.144 22.8322C125.136 12.3005 111.908 5.13657 97.433 1.89134C89.1312 0.0544273 78.4576 -0.527263 70.6726 0.513656ZM89.8611 10.6167C111.786 13.8313 131.157 28.0062 141.192 48.1818C144.233 54.3046 146.422 61.2237 147.517 68.0202C148.277 72.735 148.277 85.3792 147.517 89.7571C145.48 101.33 141.344 111.127 134.411 120.525C133.255 122.117 130.245 125.485 127.751 127.996L123.22 132.527L123.403 134.884L123.585 137.211L122.703 133.843C121.669 129.833 120.757 127.598 119.419 125.822C118.872 125.087 118.415 124.322 118.415 124.108C118.446 123.924 119.206 123.189 120.149 122.516C121.852 121.291 124.193 118.811 125.47 116.852C125.926 116.209 126.565 115.688 127.204 115.505C128.724 115.076 130.458 113.27 130.853 111.708C131.279 110.208 131.126 109.504 130.092 107.943L129.332 106.84L130.001 103.81C130.67 100.809 130.67 100.748 130.153 96.0333C129.88 93.4311 129.667 90.9206 129.667 90.4918C129.667 89.4205 127.325 84.7056 125.47 82.1034C122.369 77.6947 121.213 76.6538 116.712 74.4496C111.482 71.8474 109.566 71.4186 104.275 71.633C99.6528 71.8166 95.7603 72.7043 92.2026 74.4189C88.6141 76.1334 84.5392 80.2051 80.6166 86.0528C79.2784 88.0122 79.1872 88.257 79.1872 90.1552C79.1872 91.6246 78.8832 93.0637 78.0925 95.5434C76.7546 99.7376 76.8154 100.717 78.7312 103.993C79.4915 105.279 80.0995 106.504 80.0995 106.657C80.0995 106.84 79.7043 107.422 79.1872 107.973C77.5757 109.718 77.6061 112.412 79.2784 114.219C80.2211 115.229 82.5322 116.178 83.1101 115.78C83.2621 115.688 83.1405 114.923 82.8061 114.096C81.8938 111.678 82.137 111.586 83.2621 113.943C85.4819 118.658 88.4925 121.689 93.3277 124.077C96.9766 125.852 100.109 126.649 104.579 126.863C106.586 126.955 107.955 127.138 107.62 127.261C105.796 127.904 97.4026 126.71 93.5405 125.24L91.5334 124.475L91.0166 125.179C89.8915 126.649 87.6714 131.516 87.1242 133.69C86.8202 134.945 86.3942 137.486 86.1814 139.323C85.5731 145.048 85.3299 145.569 84.6915 142.201C83.6272 136.629 76.481 110.239 75.599 108.647C75.4774 108.402 73.5616 107.759 71.3418 107.208C69.1219 106.626 66.689 105.953 65.9286 105.646C65.199 105.371 64.4995 105.218 64.4083 105.31C64.3171 105.402 64.8339 106.289 65.5638 107.269C66.2938 108.249 67.3277 109.749 67.8749 110.576C69.3043 112.872 72.6189 120.036 73.592 122.883C74.6563 125.914 74.5651 126.128 71.3722 128.853C70.1558 129.894 69.1523 130.965 69.1523 131.241C69.1523 131.486 70.551 133.017 72.2541 134.609C75.2035 137.395 75.3254 137.578 75.0819 138.436L74.8083 139.354L74.6867 138.405C74.6259 137.67 73.896 136.844 71.433 134.486C69.6691 132.863 68.24 131.333 68.24 131.088C68.24 130.874 69.3347 129.741 70.6422 128.577C73.9872 125.7 74.0176 125.516 72.6493 121.995C70.3382 116.086 65.3814 106.963 63.5568 105.248C62.9792 104.697 62.7661 104.177 62.7661 103.35C62.7661 102.095 63.04 101.789 64.5907 101.268C66.1722 100.748 67.7229 99.5539 68.7872 98.0538C69.6387 96.8598 70.0035 96.6454 72.3453 95.9107C73.7744 95.4515 74.9299 94.9616 74.9299 94.8394C74.9299 94.6861 74.3827 93.8902 73.7136 93.0941C72.4061 91.5021 72.1626 90.3696 73.0445 90.0941C73.3184 90.0022 74.3827 89.849 75.3862 89.7264C76.3898 89.6346 77.3018 89.4816 77.4237 89.3898C77.5453 89.3286 77.241 88.1651 76.7546 86.8182C76.2374 85.471 75.8422 84.1853 75.8422 84.0016C75.8422 83.7872 76.633 83.3891 77.6061 83.0525C79.7651 82.3482 83.4445 80.5114 83.4445 80.144C83.4445 79.991 82.3194 79.256 80.9814 78.5213C78.3357 77.113 75.6598 74.9699 76.055 74.6026C76.1766 74.48 77.2714 74.0515 78.4269 73.6842C81.3462 72.7043 84.448 71.2656 86.881 69.704C88.0061 69 88.9184 68.3571 88.8576 68.3264C88.7357 68.2346 80.495 64.6832 79.7043 64.4077C79.3392 64.2547 79.248 64.071 79.4 63.7955C79.5219 63.5504 81.529 61.591 83.84 59.448C86.1206 57.2742 88.0061 55.4067 88.0061 55.2845C88.0061 55.0394 86.1206 54.7027 80.5558 53.9066C78.5488 53.6006 76.785 53.2944 76.6634 53.1718C76.5114 53.0496 77.9101 50.3552 79.7651 47.2019C82.7757 42.0278 83.3533 40.9258 83.0493 40.9258C82.9885 40.9258 80.4947 41.8138 77.5149 42.9158C73.1661 44.5078 71.9802 44.8141 71.6762 44.5078C71.007 43.8342 70.3686 38.7827 70.3686 34.2515V29.8737L67.9053 31.1901C65.0166 32.7517 61.1546 35.7824 59.3603 37.895C58.6912 38.7216 57.992 39.3952 57.8704 39.3952C57.7181 39.3952 56.5626 37.9869 55.255 36.2416C53.0048 33.2413 49.2035 28.9859 48.7779 28.9859C48.6563 28.9859 48.4128 30.3329 48.2304 31.9555C47.6832 36.5478 46.0714 42.1504 45.2806 42.1504C45.0678 42.1504 43.6083 41.5382 42.0573 40.8032C39.5638 39.64 35.7626 38.4765 34.3638 38.4765C33.999 38.4765 34.1814 39.0275 35.0634 40.8339C36.4013 43.5587 37.6176 47.8144 37.4656 49.2838L37.3744 50.2634L34.6374 50.4778C26.6702 51.0902 22.9299 51.4576 22.9299 51.6106C22.9299 51.7331 24.2679 53.1718 25.91 54.8557C28.9813 57.9786 31.2316 61.3155 31.0796 62.479C31.0188 62.9075 29.4679 64.1933 26.2749 66.4285C23.6901 68.2346 21.531 69.8573 21.4702 70.0102C21.4094 70.1635 21.7439 70.3776 22.2305 70.5002C25.4843 71.2042 26.8831 71.6637 28.0387 72.337C29.6199 73.2861 31.262 74.6944 32.0832 75.8579L32.6912 76.7152L29.2854 80.1133C26.4269 82.991 25.9404 83.5728 26.3053 83.9098C26.5486 84.1238 28.3732 84.8282 30.3802 85.4403C32.3872 86.0528 34.151 86.6957 34.303 86.8486C34.455 87.0019 34.2118 88.5632 33.6339 90.7062C33.1171 92.6963 32.7824 94.4413 32.8736 94.5942C33.0259 94.8698 38.0432 94.625 38.8643 94.3187C39.6246 94.0432 39.9286 94.7779 40.1418 97.1968C40.2634 98.6051 40.4458 99.7991 40.5674 99.8602C40.8106 100.013 44.2163 98.5437 44.2163 98.2989C44.2163 98.207 43.8211 97.5642 43.3347 96.8598C41.2973 93.8595 39.8982 90.0941 38.8035 84.5527C38.0739 81.0317 37.7392 77.664 38.1043 77.664C38.2259 77.664 38.4387 78.6438 38.5603 79.8378C39.1686 86.665 42.3008 95.3293 45.159 98.207C45.889 98.9418 47.4704 99.9827 48.9907 100.687L51.5453 101.881L51.4538 103.013L51.3626 104.146L44.6118 106.412L37.8608 108.677L37.2528 110.545C36.9181 111.586 35.5194 116.331 34.1814 121.138C31.6878 129.863 30.9276 132.068 31.2925 129.465C31.4445 128.179 31.3837 128.057 29.8328 126.342C20.1322 115.811 14.1416 103.473 11.8 89.145C10.9182 83.9098 11.0094 72.7043 11.9521 67.561C14.5977 53.1107 20.4363 41.3238 29.9849 31.2514C45.5546 14.8722 67.3581 7.34086 89.8611 10.6167ZM48.7171 109.565C46.5277 114.127 42.6352 125.057 42.9696 125.638C43.1216 125.914 44.4294 127.169 45.889 128.455C47.3789 129.741 48.6259 130.935 48.6867 131.149C48.7779 131.363 48.3216 132.037 47.6832 132.68C47.0141 133.384 46.7709 133.537 47.0749 133.078C48.2608 131.21 48.352 131.455 45.2806 128.608C43.2128 126.679 42.392 125.73 42.392 125.21C42.392 123.618 48.4128 108.279 49.0515 108.279C49.2035 108.279 49.0515 108.861 48.7171 109.565Z" />
      </svg>
    </Button>
  );
}

export default ButtonTheme;