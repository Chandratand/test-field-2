import { LucideProps } from 'lucide-react';

const Icons = {
  sort: (props: LucideProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="6" height="12" fill="none" viewBox="0 0 6 12">
      <path fill="#BEBEBE" d="M3 0l2.598 4.5H.402L3 0zM3 12L.402 7.5h5.196L3 12z"></path>
    </svg>
  ),
  uploadImage: (props: LucideProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <path
        fill="#41A0E4"
        d="M6.25 32.813l9.833-9.833a1.566 1.566 0 011.702-.339c.19.079.362.194.507.339l8.728 8.728a1.563 1.563 0 002.21 0l4.04-4.04a1.566 1.566 0 011.703-.34c.19.08.362.194.507.34l8.27 8.27v-25a1.563 1.563 0 00-1.563-1.563H7.813a1.562 1.562 0 00-1.563 1.563v21.874z"
        opacity="0.2"
      ></path>
      <path
        stroke="#41A0E4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M42.188 9.375H7.812c-.862 0-1.562.7-1.562 1.563v28.124c0 .863.7 1.563 1.563 1.563h34.374c.863 0 1.563-.7 1.563-1.563V10.939c0-.863-.7-1.563-1.563-1.563z"
      ></path>
      <path stroke="#41A0E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.25 32.812l9.833-9.832a1.563 1.563 0 012.21 0l8.727 8.728a1.564 1.564 0 002.21 0l4.04-4.04a1.563 1.563 0 012.21 0l8.27 8.27"></path>
      <path fill="#41A0E4" d="M30.469 21.875a2.344 2.344 0 100-4.687 2.344 2.344 0 000 4.687z"></path>
      <circle cx="41" cy="41" r="9" fill="#BDBDBD"></circle>
      <g clipPath="url(#clip0_1_441)">
        <path
          fill="#E8F7EE"
          fillOpacity="0.8"
          d="M37.4 41.666l-.449-.442a.47.47 0 010-.673l3.922-3.863a.488.488 0 01.685 0l3.922 3.86a.47.47 0 010 .674l-.448.442a.49.49 0 01-.693-.008l-2.315-2.393v5.711a.48.48 0 01-.485.477h-.645a.48.48 0 01-.485-.477v-5.71l-2.317 2.394a.487.487 0 01-.693.008z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_441">
          <path fill="#fff" d="M0 0H9.043V10.174H0z" transform="translate(36.696 35.913)"></path>
        </clipPath>
      </defs>
    </svg>
  ),
};

export default Icons;
