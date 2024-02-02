import { GiAsteroid, GiSpermWhale } from "react-icons/gi";
import returnIconStyles from "./returnIconStyles";
import { MdOutlineAirplanemodeActive as PlaneIcon } from "react-icons/md";
/**
 *
 * Given the icon name it returns the icon
 * the "obj" argument accepts an object with all the properties necessary for calculating the icons style
 *
 * all the styles are  changed inline to be able to change them programatically
 *
 * however that made me have to settle on this not so pretty code structure
 */

const returnIcon = (iconType, obj) => {
  const { anchorPoint, comparedTo, scales, mobile } = obj;

  const fixedAsteroidSize = mobile ? 350 : 450;

  const icons = {
    asteroid: (
      <GiAsteroid
        style={{
          height: `${fixedAsteroidSize}px`,
          width: `${fixedAsteroidSize}px`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType
          ),
          transition: ".3s ease-in-out",
        }}
      />
    ),
    human: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="841.89"
        viewBox="0 0 595.28 841.89"
        version="1.1"
        style={{
          fill: "white",
          height: `${fixedAsteroidSize}px`,
          width: `auto`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType
          ),
          transition: ".3s ease-in-out",
        }}
      >
        <path d="m328.22 95.273c-1.134 9.06-4.65 17.555-4.968 28.286 7.38 4.546 12.769 12.21 19.876 16.836 5.624 3.664 22.924 9.147 29.812 11.479 9.042 3.022 25.309 3.666 29.827 10.68 1.306 2.107 0.625 3.879 1.642 6.157 5.818 12.741 10.126 30.119 14.08 44.347 0.564 5.352 1.129 10.707 1.687 16.042 5.868 22.291 7.54 48.003 13.221 71.889 2.597 10.9 0.042 23.092 2.481 33.632 2.063 8.707-0.634 19.854-0.805 27.578-0.551 23.882-0.991 44.771-0.86 67.295-3.187 1.08-4.417 0.706-4.944 4.562 2.237 2.916 6.75 23.853 4.128 30.626-0.759 1.997-3.915 2.89-4.957 4.563-5.868 9.287-14.915 22.622-28.973 23.703 0.36-5.313 2.96-7.145 4.15-11.461 1.901-7.228-0.538-17.585-2.529-22.201-0.81-0.231-1.621-0.466-2.477-0.748v0.748c-4.788 7.725 0.361 18.83-11.571 19.895-0.184-10.024 0.539-29.007 3.288-37.46 1.132-3.476 3.403-6.708 4.152-10.687h-1.646c-1.539-0.955-4.718-0.834-7.469-0.793-2.141 2.813-2.635 5.228-2.508 10.725-8.974 10.485-6.946 40.716-5.771 59.646 0.25 3.815 2.938 7.854 1.67 12.25-0.679 2.227-3.521 4.859-4.151 6.858 0.27 8.683 0.533 17.325 0.837 26.033 0.044 5.236 3.72 9.736 1.645 15.3-0.452 1.147-2.797 2.104-3.324 3.014-1.545 2.816-0.36 6.986-0.823 9.176-1.635 7.917 3.605 12.581 0.823 20.68-5.595 16.388-9.67 34.34-15.722 51.219-1.394 3.836-4.645 7.75-5.811 11.507-3.638 11.667 2.884 23.916-0.817 34.414-2.529 7.203-8.938 7.331-9.111 17.578 11.231 13.84-3.116 40.876-8.258 52-2.827 5.957-2.529 10.582-11.628 10.716-2.272-1.592-5.888-1.592-9.943-1.547-1.692 3.086-3.254 8.244-4.15 9.918-0.814 0.535-1.635 1.077-2.462 1.622-1.194 3.123 2.684 10.038 0.827 14.461-0.381 0.916-2.973 2.708-3.309 3.83 0.291 1.287 0.517 2.583 0.793 3.831-0.14 0.918-1.313 3.209-1.604 4.582-10.922 6.254-49.431 13.003-50.563-5.323 2.87-2.592 2.934-5.672 4.99-9.214 4.628-7.997 8.639-8.923 5.792-20.621 0.281-4.588 0.573-9.176 0.817-13.751-1.557-4.543-6.366-6.584-7.449-12.259 1.328-1.031 0.951-0.497 1.673-2.328-8.798-5.672-5.531-16.745-9.118-27.496-3.426-10.336-3.836-24.375-6.635-35.962-0.265-6.084-0.536-12.248-0.833-18.332-2.415-9.876-1.669-22.496-4.124-32.914-0.277-5.589-0.564-11.214-0.813-16.837-3.384-10.672-7.805-18.193-10.792-30.573-0.264-11.222-0.535-22.436-0.829-33.623 0.293-1.353 1.542-5.123 0.829-7.665-3.963-14.539-6.397-34.64-10.753-49.706-2.604-8.96 0.158-20.766-2.508-29.854-2.39-8.295-6.11-15.439-9.925-22.146-2.616-4.661-3.024-12.243-9.927-13.038-2.729 1.518-9.07-0.461-13.266-0.727 0.049-29.197-10.558-49.671-16.562-74.217-0.56-10.183-1.127-20.408-1.669-30.574-3.517-15.004-0.361-28.857 3.343-42.834 4.595-17.464 5.185-35.247 9.898-52.002 0.574-4.621 1.11-9.167 1.673-13.768 3.726-13.065 8.257-34.4 15.77-44.358 6.679-8.913 23.459-8.807 34.745-13.788 7.179-3.147 16.035-5.336 23.19-9.148 6.075-3.247 12.844-12.932 18.253-17.625 0.158-14.229-3.45-22.42-4.171-34.394h-6.61c-0.817-1.347-1.036-1.293-1.673-3.058-3.942-4.567-2.371-15.294-0.833-20.648 3.702-1.017 5.327-0.127 5.795-4.601-2.857-4.09-0.469-15.835 0.86-19.105 5.027-12.583 17.87-23.527 34.767-24.478 21.072-1.184 37.005 13.273 40.607 29.06-0.849 6.625-1.669 13.269-2.474 19.935 5.119 1.543 7.509 2.734 8.258 8.397-4.83 6.782-1.59 16.865-14.13 16.805zm46.38 170.54c-10.822 22.434-1.927 69.539 3.296 91.037v9.939c2.325 9.604 3.066 19.687 6.629 27.528 0.835 0.285 1.672 0.517 2.509 0.758v-0.758c0.659-0.901 0.608-1.296 0.805-3.028-3.518-5.516 0.88-16.75-0.805-23.749-0.767-3.059-1.699-8.848-2.509-12.251v-22.125c-3.116-13.289-2.712-28.332-5.773-41.31-1.9-7.939 2.028-19.773-2.484-25.27-0.87-0.61-0.26-0.31-1.68-0.77zm-154.9 8.39c-1.849 5.234-0.722 11.248-2.458 16.876-0.837 2.603-3.525 6.5-4.13 9.146-1.222 5.19 3.455 10.875 1.648 17.623-2.146 7.876-5.212 26.708-1.648 36.708h1.648v-1.544c4.622-6.352 4.399-16.394 6.609-25.244 4.289-17.124 8.756-23.416 2.481-42.059-1.401-4.238-0.09-7.801-2.481-10.676-0.84-0.64-0.23-0.32-1.67-0.84zm76.21 234.85c-1.084 1.438-1.084 0.62-1.642 3.045-7.385 10.12 2.773 25.705 0 36.722-3.869 15.247 0.445 28.944 4.128 43.585-0.271 6.083-0.548 12.24-0.819 18.361 3.091 14.005 0.674 34.467 4.161 50.461h2.434c7.896-12.705 3.789-40.791 8.301-56.582 0.533-1.869 2.611-18.843 2.497-19.153-0.329-0.77-2.949-1.004-3.312-1.48-1.309-1.995 0.385-5.252-0.833-6.933-1.172-1.634-4.4-1.612-5.799-3.028-2.345-2.396-4.968-10.754-5.782-13.809-2.438-8.773 5.872-14.688 7.443-19.875 1.001-3.267-7.166-25.959-8.292-30.563-0.82-0.27-1.66-0.5-2.49-0.75z" />{" "}
      </svg>
    ),
    eiffel: (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{
          fill: "white",
          height: `${fixedAsteroidSize}px`,
          width: `auto`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType
          ),
          transition: ".3s ease-in-out",
        }}
        viewBox="0 0 736 1920"
      >
        <g>
          <path
            d="M371,1c0,1.7928,0,3.5856,0,5.6754c3.1156,0.2445,6.3162,1.6389,6.4228-3.3596c0.3531,2.0479,0.7062,4.0958,1.1506,6.6732
		c-2.4914,0.2529-4.7224,0.4794-7.3257,0.7436c-0.1255,1.4959-0.3484,2.9238-0.3499,4.352
		c-0.0223,21.8303-0.2111,43.6641,0.1733,65.4876c0.0652,3.7031,2.8299,7.3002,3.9487,11.0648
		c0.6826,2.297,1.0436,4.8735,0.7607,7.2297c-0.4067,3.3867,2.2062,7.6776-2.5941,10.0617
		c-0.3336,0.1657-0.1742,2.3479,0.3924,3.1329c3.2401,4.4883,3.2336,13.2663,0.1163,17.4642
		c-0.6358,0.8563-0.59,3.0179,0.0615,3.8931c2.897,3.8923,3.0266,13.6131,0.1478,17.1991
		c-0.6794,0.8462-0.9098,3.3442-0.6836,3.4353c4.4993,1.8116,1.9562,5.6888,2.6925,8.5564
		c0.3793,1.4774,0.6083,3.7155,1.5986,4.2039c12.0382,5.9364,18.5288,16.317,23.2351,28.2197
		c0.4892,1.2372,1.0104,2.4618,1.6767,4.0808c3.015,0,6.1187,0,9.5057,0c0,5.1783,0,9.9422,0,14.4297
		c-2.0557,0.9646-3.9575,1.857-5.8593,2.7493c1.4883,0.8992,2.9766,1.7984,5.1732,3.1254c0,4.6091,0,10.1639,0,16.047
		c-1.5847,0.2376-3.1574,0.4734-4.7447,0.7114c-1.5942,4.1084,1.0082,4.0649,3.7014,4.0146
		c2.4889-0.0465,4.9794-0.0099,8.2015-0.0099c0.6693,9.5112,1.3228,18.7991,1.8456,26.2295
		c-4.1078,3.606-7.3062,5.6669-9.5226,8.4969c-7.1563,9.1371-9.1574,20.2626-10.5312,31.3322
		c-0.9783,7.8829-1.1354,15.9439-0.846,23.8959c2.5145,69.0996,4.8686,138.2079,7.9481,207.2834
		c3.4505,77.3964,7.2257,154.7828,11.579,232.133c3.3885,60.2062,7.5691,120.3732,11.9834,180.5146
		c3.2673,44.5142,6.6931,89.0441,11.4969,133.4102c4.3712,40.37,10.6844,80.5303,16.1697,120.7791
		c0.7855,5.7638,1.7287,11.5063,2.6687,17.7203c7.3515,0,14.6183,0,21.7651,0c0.8004,4.2999,1.6515,8.0909,2.1089,11.9291
		c0.1024,0.8595-1.0937,2.6292-1.8301,2.7092c-4.3879,0.4767-6.4663,3.4833-7.6161,7.031
		c-3.408,10.5153-5.4131,21.1913-2.6185,32.2673c15.9972,63.4027,31.4259,126.9556,48.1893,190.1547
		c6.8099,25.6736,16.5431,50.5687,24.8087,75.863c0.9349,2.8607,2.542,3.3431,5.1542,3.3091
		c8.7884-0.1149,17.5792-0.0437,26.3507-0.0437c0,15.3308,0,30.0577,0,45.1138c3.3297,0.3149,6.3163,0.5974,9.6169,0.9095
		c-7.0198,9.2853-10.4893,25.4117-7.3981,33.9413c-0.9554,0.5508-1.9647,1.1327-3.1775,1.8319
		c10.9536,22.4906,21.7955,44.7814,32.6629,67.0597c31.6002,64.7809,63.2236,129.5507,94.7839,194.351
		c1.8188,3.7345,4.1771,6.1594,8.1887,8.0043c6.1494,2.8286,11.6587,7.0488,17.4405,10.679
		c-1.4589,6.6013,3.6301,9.3694,7.3774,12.9135c-1.3333,0.3334-2.6664,0.9567-4.0001,0.958C684,1921.0078,635,1921,586,1921
		c1.1193-4.0438,3.201-8.076-0.7626-11.923c-0.5778-0.561-0.3848-2.851,0.2827-3.6021c3.254-3.6606,4.5316-7.8728,4.5386-12.6567
		c0.0457-31.0323-10.3522-59.001-24.8798-85.8313c-30.874-57.0192-103.08-107.4421-175.689-112.4075
		c-60.7076-4.1514-114.576,11.485-162.1179,49.3146c-41.5111,33.0313-68.164,75.2056-77.6483,127.5934
		c-2.1008,11.6042-5.3472,23.9421,3.3321,34.8429c0.4419,0.5548,0.2975,2.312-0.2269,2.7843
		c-4.1758,3.7604-1.7248,7.8563-0.8289,11.8854c-49,0-98,0.0078-146.9999-0.0419C3.6664,1920.9568,2.3333,1920.3334,1,1920
		c3.6146-3.4304,8.4598-6.1499,7.3925-13.2753c6.372-3.5896,13.4044-7.3024,20.1397-11.4927
		c2.1027-1.3081,3.8861-3.6693,5.0007-5.9473c29.9281-61.1628,59.7509-122.3773,89.5889-183.5844
		c11.381-23.3461,22.7383-46.7039,34.1546-70.0326c1.4243-2.9103,2.392-5.4476,1.6747-9.0864
		c-0.9246-4.6901,0.3462-9.7689-0.1221-14.6034c-0.6998-7.2241-2.0268-14.4061-8.4045-20.6892
		c3.6515-0.332,6.5798-0.5984,10.0032-0.9097c0-14.8922,0-29.6169,0-45.1871c7.3595,0,14.7742,0.0011,22.1888-0.0004
		c8.2023-0.0016,7.9718-0.0938,10.9848-7.7145c20.2079-51.1115,32.0708-104.6132,45.36-157.7092
		c8.8488-35.3546,17.9749-70.642,26.491-106.0763c2.5739-10.7094,0.6228-21.54-3.8424-31.5874
		c-1.0218-2.2992-4.3841-3.5082-6.5254-5.3833c-0.9234-0.8085-2.186-2.1141-2.0802-3.0577
		c0.4133-3.6864,1.312-7.3185,2.1396-11.5261c6.9288,0,14.18,0,21.7236,0c2.7094-18.2045,5.6919-35.9119,7.9254-53.7131
		c5.4102-43.1206,10.9931-86.2308,15.5021-129.4501c3.3697-32.2986,5.2884-64.7524,7.6434-97.1525
		c3.0315-41.7084,6.0662-83.4186,8.6977-125.1534c2.097-33.2574,3.6509-66.5499,5.3405-99.8322
		c2.602-51.2566,5.1968-102.5138,7.6393-153.7781c2.2126-46.4393,4.4301-92.8802,6.2448-139.336
		c1.379-35.3001,2.4617-70.6198,2.9919-105.941c0.2055-13.6946-2.473-27.2204-9.26-39.4546
		c-2.4683-4.4493-5.2104-9.0273-11.9352-9.925c0.6554-9.2014,1.3083-18.3676,1.9683-27.6327
		c4.3059-0.5349,8.2806-0.9966,12.2256-1.6399c0.1522-0.0248,0.0194-1.7968,0.0194-2.9919
		c-1.7043-0.1716-3.1521-0.3174-5.0156-0.505c0-5.6203,0-11.176,0-16.4994c1.7855-0.9703,3.4507-1.8752,5.1159-2.7801
		c-1.7348-0.8528-3.4696-1.7057-5.7657-2.8345c0-4.1901,0-9.0668,0-14.3386c3.2409,0,6.3452,0,9.5052,0
		c3.7485-10.2509,8.1871-19.7142,16.465-26.7751c0.7602-0.6484,1.3844-1.6034,2.2567-1.9492
		c6.0888-2.4132,9.1331-6.4755,7.8633-13.2819c-0.1209-0.648,1.4228-1.4692,1.7392-2.3697
		c0.4335-1.2336,1.0584-3.0164,0.5144-3.8763c-3.378-5.3395-3.3705-11.843,0.165-17.8266c0.4951-0.8379,0.5005-2.4764,0.003-3.3075
		c-3.515-5.871-3.5817-12.7472-0.1718-17.7853c0.5429-0.8021,0.7231-2.817,0.2311-3.2044
		c-5.6829-4.4737-1.6049-10.4433-2.3514-15.611c-0.2892-2.0013,2.1177-4.2605,2.7246-6.5535
		c0.9317-3.52,1.896-7.1659,1.9294-10.7669c0.1837-19.8314,0.0887-39.6654,0.0893-59.4985c0.0001-1.7889,0-3.5777,0-5.5841
		c-2.639-0.2526-4.748-0.4544-7.4671-0.7146c0.3003-2.3036,0.5806-4.4544,0.7749-5.9445c1.7897,1.1066,3.6452,2.2539,6.5239,4.0338
		c0-3.5812,0-5.3726,0-7.164C368.3333,1,369.6667,1,371,1z M324.441,1328.0408c-11.922,72.7325-22.6619,145.1182-38.1751,216.7688
		c55.1111,0,110.597,0,165.2077,0c-12.8733-72.3667-25.707-144.5107-38.561-216.7688
		C383.658,1328.0408,354.2241,1328.0408,324.441,1328.0408z"
          />
        </g>
      </svg>
    ),
    airplane: (
      <PlaneIcon
        style={{
          height: `${fixedAsteroidSize}px`,
          width: `${fixedAsteroidSize}px`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType
          ),
          transition: ".3s ease-in-out",
        }}
      />
    ),
    whale: (
      <GiSpermWhale
        style={{
          height: `auto`,
          width: `${fixedAsteroidSize}px`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType
          ),
          transition: ".3s ease-in-out",
        }}
      />
    ),
    burj: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1541.4"
        viewBox="0 0 375.89999 1541.4"
        width="375.9"
        version="1.1"
        style={{
          fill: "white",
          height: `${fixedAsteroidSize}px`,
          width: `${fixedAsteroidSize}px`,
          transform: returnIconStyles(
            anchorPoint,
            comparedTo,
            scales,
            iconType,
            "is"
          ),
          transition: ".3s ease-in-out",
        }} // Set the fill property to white
      >
        <path d="m0 1516.6v-24.75h14.4c9.4 0 14.4-0.1042 14.4-0.3 0-0.1929 3-0.3 8.4-0.3h8.4v-7.9462-7.9461l10.575-0.079 10.575-0.079 0.08006-7.725 0.08006-7.725h11.095 11.095v-96.909c0-92.022 0.02649-96.919 0.525-97.099 0.28875-0.1042 0.87191-0.4293 1.2959-0.7225 0.93397-0.6459 6.422-2.0526 12.129-3.1089 2.31-0.4276 4.841-0.922 5.6246-1.0987l1.4246-0.3213 0.0754-99.762 0.0755-99.762 3.75-1.7271c2.0625-0.9499 6.0788-2.5133 8.925-3.4742l5.175-1.7471v-115.46-115.46l0.675-0.57048c3.7826-3.1968 18.413-11.376 20.349-11.376 0.16701 0 0.27556-54.838 0.27556-139.22v-139.22l1.0375-2.2455c3.1668-6.854 7.7704-12.417 14.276-17.252 4.0261-2.992 3.5769 1.5138 3.5853-35.963 0.007-30.721 0.0357-32.434 0.60653-36.133 1.05-6.8027 1.9646-10.02 3.4671-12.196l0.74497-1.0789 0.0661-33.721 0.0661-33.721 0.95868-1.9587c1.3677-2.7944 3.6859-5.7251 6.1124-7.7275l2.0959-1.7296-0.0127-51.237-0.0127-51.237 0.76479-3.7123c1.2731-6.1795 2.5641-10.014 4.4609-13.251l1.0827-1.8474v-41.017c0-40.18 0.0123-41.058 0.6015-43.037 1.0457-3.5113 2.3063-6.2084 4.1807-8.9452l1.8178-2.6541v-24.798-24.798h1.65 1.65v-41.25-41.25h1.8 1.8v48.9 48.9h1.5 1.5v29.4c0 25.933 0.0531 29.4 0.45 29.4 0.39603 0 0.45 2.7167 0.45 22.65v22.65h2.4 2.4v47.85 47.85h2.1 2.1v42.124 42.124l1.8826 1.3434c1.0354 0.73884 2.7904 2.3057 3.9 3.482l2.0174 2.1386v53.844c0 36.137 0.0999 53.844 0.30373 53.844 1.1961 0 3.7563 5.9158 4.6741 10.8l0.7046 3.75 0.009 56.775c0.005 31.226 0.12275 56.775 0.26201 56.775 0.32742 0 7.5531 5.6992 10.766 8.4916l2.4834 2.1584 0.00021 54.6 0.00021 54.6 0.81329 4.5 0.8133 4.5 0.16026 69.427 0.16026 69.427 3.15 1.1261c1.7325 0.61935 5.3438 2.2375 8.025 3.5959l4.875 2.4698 0.001 112.38 0.001 112.38 6.3739 1.6257c3.5056 0.8942 6.8126 1.7443 7.3489 1.8891l0.975 0.2634v93.436 93.436l0.975-0.01c0.53625 0 4.1138 0.4208 7.95 0.9441l6.975 0.9515v71.656 71.656h10.35 10.35v7.8 7.8h10.2 10.2v8.1 8.1h22.05 22.05v24.75 24.75h-187.95-187.95v-24.75z" />
      </svg>
    ),
  };

  return icons[`${iconType}`];
};

export default returnIcon;
