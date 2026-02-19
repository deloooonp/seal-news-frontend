import { IconProps } from "@/types/common";

export default function Facebook({ className, color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="12" fill={color} />
      <g clip-path="url(#clip0_5001_30062)">
        <path
          d="M32.0001 20.0735C32.0001 13.4045 26.6271 7.99847 20.0001 7.99847C13.3701 7.99997 7.99707 13.4045 7.99707 20.075C7.99707 26.1005 12.3861 31.0955 18.1221 32.0015V23.564H15.0771V20.075H18.1251V17.4125C18.1251 14.387 19.9176 12.716 22.6581 12.716C23.9721 12.716 25.3446 12.9515 25.3446 12.9515V15.9215H23.8311C22.3416 15.9215 21.8766 16.853 21.8766 17.8085V20.0735H25.2036L24.6726 23.5625H21.8751V32C27.6111 31.094 32.0001 26.099 32.0001 20.0735Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_5001_30062">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
