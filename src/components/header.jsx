import { useRef } from "react";
import "../style/header.css";

import mainImg from "../assets/img/main.png";
import lefttImg from "../assets/img/leftt.png";
import righttImg from "../assets/img/rightt.png";
import bottomImg from "../assets/img/bottom.png";
import bottoImg from "../assets/img/botto.png";

const AnimatedHeader = () => {
  const centerImgRef = useRef(null);

  const defaultImg = mainImg;

  const handleMouseEnter = (e) => {
    const bubble = e.currentTarget;
    const newImg = bubble.dataset.img;

    if (centerImgRef.current) {
      centerImgRef.current.style.opacity = "0";
      setTimeout(() => {
        centerImgRef.current.src = newImg;
        centerImgRef.current.style.opacity = "1";
        centerImgRef.current.style.transform = "scale(1.05)";
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (centerImgRef.current) {
      centerImgRef.current.style.opacity = "0";
      setTimeout(() => {
        centerImgRef.current.src = defaultImg;
        centerImgRef.current.style.opacity = "1";
        centerImgRef.current.style.transform = "scale(1)";
      }, 200);
    }
  };

  return (
    <>
      <div className="main-header">
        <div className="wrapper section">
          <div className="small s1" />
          <div className="small s2" />
          <div className="small s3" />
          <div className="small s4" />
          <div className="small s5" />
          <div className="small s6" />
          <div className="small s7" />
          <div className="small s8" />

          <div className="center">
            <img
              ref={centerImgRef}
              src={defaultImg}
              alt="Center"
              className="center-img"
            />
          </div>

          <div
            className="bubble b1"
            data-img={lefttImg}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              fill="none"
              height="51"
              viewBox="0 0 50 51"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25.5" fill="#93e190" r="24" />
              <ellipse
                cx="12.2516"
                cy="33.2027"
                fill="#FF0000"
                rx="3.68421"
                ry="3.66363"
              />
              <path
                d="M18.9121 29.3863C17.6797 29.6043 14.8976 30.7341 13.6283 33.5089C13.8318 30.8078 17.2335 29.1247 18.6222 28.8266C16.2059 28.0575 13.7366 30.7385 13.0485 32.3893"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <ellipse
                cx="30.6539"
                cy="32.2007"
                fill="#FF0000"
                rx="3.68421"
                ry="3.66363"
              />
              <path
                d="M21.9336 32.3646C24.1543 31.8734 24.6478 34.8212 22.4271 35.3125"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M27.3693 37.2334C25.195 38.9751 19.3365 39.0352 16.8945 37.7186C16.9838 38.7478 17.0729 40.5626 18.2493 41.2868C19.5177 42.0676 25.7989 42.0087 27.3693 37.2334Z"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="#F7EFE4"
              />
              <path
                d="M18.5211 40.9962C17.9469 40.6427 17.7666 40.2329 17.584 39.578C18.5453 39.3869 20.4794 39.1799 21.4941 41.1869C20.0995 41.3447 19.0026 41.2926 18.5211 40.9962Z"
                fill="#FF0000"
              />
              <path
                d="M17.1117 35.8223C16.7997 37.4134 15.1086 38.6146 13.5986 38.3143"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M27.027 35.8223C27.3083 36.993 28.5766 37.8338 30.3281 37.5936"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M20.544 42.8485C19.5883 43.0551 18.0677 42.8367 17.2222 42.1878C16.6006 41.7109 16.1954 40.9866 16.0746 40.6264"
                stroke="#85402D"
                strokeLinecap="round"
              />
              <path
                d="M25.7852 28.8854C27.0176 29.1034 29.7997 30.2331 31.069 33.0079C30.8654 30.3068 27.4638 28.6237 26.0751 28.3256C28.4914 27.5565 30.9607 30.2375 31.6488 31.8884"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="heading h1">Projects</span>
          </div>

          {/* Bubble 2 - Art Corner */}
          <div
            className="bubble b2"
            data-img={righttImg}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              fill="none"
              height="51"
              viewBox="0 0 51 51"
              width="51"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="25.5"
                cy="25.4999"
                fill="#93e190"
                rx="24.5"
                ry="24.2118"
              />
              <ellipse
                cx="3.89991"
                cy="3.83647"
                fill="#FF0000"
                rx="3.89991"
                ry="3.83647"
                transform="matrix(0.985531 0.169498 -0.175331 0.98451 17.4863 10.8066)"
              />
              <ellipse
                cx="3.89991"
                cy="3.83647"
                fill="#FF0000"
                rx="3.89991"
                ry="3.83647"
                transform="matrix(0.985531 0.169498 -0.175331 0.98451 34.418 13.2158)"
              />
              <mask
                height="10"
                id="mask0_1874_11198"
                maskUnits="userSpaceOnUse"
                width="11"
                x="19"
                y="7"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M25.1427 7.70435C27.3415 9.07249 28.0527 9.3828 29.3276 7.89502C29.3094 10.4803 28.6919 15.7887 26.3678 16.3406C24.6859 15.297 21.8863 14.8684 20.32 15.3123C18.7537 15.7563 20.0117 8.77325 21.0095 7.75919C21.0095 7.75919 22.9439 6.33621 25.1427 7.70435Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1874_11198)">
                <ellipse
                  cx="3.71272"
                  cy="5.05644"
                  fill="#F7EFE4"
                  rx="3.71272"
                  ry="5.05644"
                  transform="matrix(0.986075 0.16644 -0.17855 0.983956 21.5107 5.76172)"
                />
                <mask
                  height="11"
                  id="mask1_1874_11198"
                  maskUnits="userSpaceOnUse"
                  width="9"
                  x="20"
                  y="6"
                  style={{ maskType: "alpha" }}
                >
                  <ellipse
                    cx="3.70707"
                    cy="5.06104"
                    fill="white"
                    rx="3.70707"
                    ry="5.06104"
                    transform="matrix(0.986215 0.165665 -0.179386 0.983814 21.5215 5.76172)"
                  />
                </mask>
                <g mask="url(#mask1_1874_11198)">
                  <ellipse
                    cx="3.71136"
                    cy="4.01015"
                    fill="#85402D"
                    rx="3.71136"
                    ry="4.01015"
                    transform="matrix(0.986224 0.165616 -0.179438 0.983805 19.1406 9.71289)"
                  />
                </g>
              </g>
              <mask
                height="11"
                id="mask2_1874_11198"
                maskUnits="userSpaceOnUse"
                width="10"
                x="30"
                y="8"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M35.7211 9.52413C33.1747 10.0855 32.3973 10.1427 31.7183 8.32275C30.8316 10.7604 29.5566 15.957 31.5497 17.2429C33.4964 16.8163 36.2794 17.3368 37.5974 18.2711C38.9154 19.2054 40.1735 12.2224 39.5895 10.9394C39.5895 10.9394 38.2675 8.96275 35.7211 9.52413Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask2_1874_11198)">
                <ellipse
                  cx="3.71272"
                  cy="5.05643"
                  fill="#F7EFE4"
                  rx="3.71272"
                  ry="5.05643"
                  transform="matrix(-0.986075 -0.16644 -0.17855 0.983956 39.8301 8.88965)"
                />
                <mask
                  height="11"
                  id="mask3_1874_11198"
                  maskUnits="userSpaceOnUse"
                  width="9"
                  x="31"
                  y="8"
                  style={{ maskType: "alpha" }}
                >
                  <ellipse
                    cx="3.70707"
                    cy="5.06104"
                    fill="white"
                    rx="3.70707"
                    ry="5.06104"
                    transform="matrix(-0.986215 -0.165665 -0.179386 0.983814 39.8301 8.88184)"
                  />
                </mask>
                <g mask="url(#mask3_1874_11198)">
                  <ellipse
                    cx="3.71136"
                    cy="4.01015"
                    fill="#85402D"
                    rx="3.71136"
                    ry="4.01015"
                    transform="matrix(-0.986224 -0.165616 -0.179438 0.983805 37.5586 12.8516)"
                  />
                </g>
              </g>
              <path
                d="M31.7961 8.33493C32.4814 10.1581 33.2608 10.1026 35.8127 9.54678C38.3645 8.99092 39.695 10.9724 39.695 10.9724M36.9784 17.8947C35.2894 16.8463 34.1612 16.6997 32.5918 17.1403"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M29.1619 7.88186C27.8872 9.36792 27.1733 9.05566 24.9653 7.68116C22.7572 6.30665 20.821 7.7263 20.821 7.7263M25.6573 15.9476C23.9683 14.8992 22.8402 14.7526 21.2707 15.1932"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M33.7584 20.4964C29.4126 23.7527 27.4142 24.069 24.4257 23.0665C24.7321 27.3352 28.6494 28.564 31.3342 26.4536C33.7333 24.5678 34.0844 21.5924 33.7584 20.4964Z"
                fill="#F7EFE4"
              />
              <path
                d="M33.7584 20.4964C29.4126 23.7527 27.4142 24.069 24.4257 23.0665M33.7584 20.4964C34.0844 21.5924 33.7333 24.5678 31.3342 26.4536C28.6494 28.564 24.7321 27.3352 24.4257 23.0665M33.7584 20.4964C33.3067 21.8066 30.8766 24.5685 29.01 25.0825C26.7421 25.7071 25.4117 25.0417 24.4257 23.0665"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M29.1558 17.3772C27.7077 17.3772 26.4823 17.2677 26.9279 18.5813C27.2843 19.6322 28.2647 20.0045 28.5989 20.0045"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M28.9244 28.6818C28.2588 28.8127 27.3274 28.8122 26.3956 28.4198C25.7969 28.1676 25.1976 27.7658 24.7984 27.3733"
                stroke="#85402D"
                strokeLinecap="round"
              />
            </svg>
            <span className="heading h2">Art Corner</span>
          </div>

          {/* Bubble 3 - Experience */}
          <div
            className="bubble b3"
            data-img={bottomImg}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              fill="none"
              height="51"
              viewBox="0 0 50 51"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25.5" fill="#93e190" r="24" />
              <ellipse
                cx="3.72401"
                cy="3.72187"
                fill="#FF0000"
                rx="3.72401"
                ry="3.72187"
                transform="matrix(-0.887769 0.460294 0.4651 0.88526 27.7861 11.8828)"
              />
              <path
                d="M18.4303 16.5646C19.639 16.1863 22.669 15.9072 25.1187 17.8171C23.66 15.4764 19.8128 15.5456 18.426 15.9247C20.2306 14.1039 23.7127 15.3695 25.1101 16.5371"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <ellipse
                cx="3.72401"
                cy="3.72187"
                fill="#FF0000"
                rx="3.72401"
                ry="3.72187"
                transform="matrix(-0.887769 0.460294 0.4651 0.88526 10.7812 19.5625)"
              />
              <path
                d="M16.5768 19.1405C14.4676 18.2035 13.3798 21.0282 15.4888 21.9654"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12.015 19.3246C11.0109 20.094 9.04576 22.4041 9.218 25.4898C8.12305 22.9662 10.3831 19.8703 11.4898 18.9562C8.95497 19.3886 8.00472 22.9482 8.16744 24.7528"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M18.0765 28.6473C16.7163 27.511 15.6953 27.7089 14.3814 28.7216C12.9198 29.8483 11.785 28.0437 11.9158 26.8713C12.0484 25.6833 13.2308 24.5952 14.3551 24.7837C15.2034 24.9258 15.2015 25.6224 15.866 25.8925C16.6529 26.2123 17.5656 25.5935 17.9933 24.9351"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <ellipse
                cx="0.916219"
                cy="0.751567"
                fill="#85402D"
                rx="0.916219"
                ry="0.751567"
                transform="matrix(-0.301029 0.951202 0.956144 0.30064 13.3408 25.8096)"
              />
            </svg>
            <span className="heading h3">Experience</span>
          </div>

          {/* Bubble 4 - About Me */}
          <div
            className="bubble b4"
            data-img={bottoImg}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              fill="none"
              height="51"
              viewBox="0 0 50 51"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25.5" fill="#93e190" r="24" />
              <ellipse
                cx="3.77942"
                cy="3.77706"
                fill="#FF0000"
                rx="3.77942"
                ry="3.77706"
                transform="matrix(0.855217 -0.517559 0.522754 0.852922 3.41895 21.5107)"
              />
              <path
                d="M12.4212 15.8828C11.4563 16.7287 9.62198 19.1989 10.0043 22.3124C8.7255 19.8294 10.8054 16.5439 11.8645 15.5445C9.32685 16.151 8.60447 19.8191 8.89084 21.6359"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <ellipse
                cx="3.77942"
                cy="3.77706"
                fill="#FF0000"
                rx="3.77942"
                ry="3.77706"
                transform="matrix(0.855217 -0.517559 0.522754 0.852922 19.043 10.8408)"
              />
              <path
                d="M16.0146 16.5708C16.298 14.2645 19.3421 14.808 19.0588 17.1143"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M18.1923 11.7812C19.3908 11.3175 22.4401 10.8327 25.0488 12.6028C23.4147 10.3304 19.5238 10.6573 18.145 11.1336C19.8501 9.16982 23.4609 10.2187 24.9541 11.3075"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M15.2468 23.4972C17.5806 23.7019 22.0864 21.6974 23.1746 19.6204"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M24.3397 24.8651C22.4889 25.6339 20.5207 23.503 18.8547 22.7334C19.2586 22.1313 21.8898 20.8878 22.4398 20.9099C22.9898 20.932 26.1905 24.0962 24.3397 24.8651Z"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="#FF0000"
              />
              <path
                d="M14.7696 21.9617C15.0687 23.2973 14.1709 24.7912 12.9034 25.0626"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M22.4345 18.6418C23.0491 19.4542 24.3138 19.6819 25.5847 18.9114"
                stroke="#85402D"
                strokeLinecap="round"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M20.5904 21.6822C21.1672 21.7474 22.3533 22.8183 22.833 23.2861"
                stroke="#85402D"
                strokeLinecap="round"
              />
            </svg>
            <span className="heading h4">About Me</span>
          </div>
        </div>
        <div className="header-text">
          <p className="header-p">Specializing in designing</p>
          <h1 className="header-h">Interactive websites & Applications </h1>
        </div>
      </div>
    </>
  );
};

export default AnimatedHeader;
