import { useDripsyTheme } from 'dripsy'
import { Platform } from 'react-native'
import Svg, { Circle, Rect, Path, G } from 'react-native-svg'
const TruckIcon1 = ({ color }: { color: string }) => {
  const { theme } = useDripsyTheme()
  color = color == 'primary' ? theme.colors.primary : theme.colors.secondary
  return (
    <Svg id="Layer_1" x="0px" y="0px" viewBox="0 0 251 321">
      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M30.006481,113.028069 
	C35.012737,111.332321 38.404812,108.618919 38.929485,102.672951 
	C39.578880,95.313644 48.578735,89.897400 55.684914,89.131973 
	C60.304287,88.634422 64.996727,88.712860 69.656563,88.709274 
	C108.977028,88.679016 148.298340,88.568619 187.617004,88.835304 
	C192.720078,88.869919 197.977341,90.433968 202.863113,92.145927 
	C209.054077,94.315216 212.113495,99.253540 212.796570,105.858017 
	C212.957169,107.410759 214.336426,109.577431 215.699112,110.137192 
	C221.455841,112.501968 227.371445,114.516739 233.321060,116.362610 
	C237.490585,117.656212 239.944626,120.025764 239.981796,124.510345 
	C240.014923,128.508850 239.994858,132.507812 239.998047,136.506577 
	C240.006973,147.712234 238.982422,148.172836 228.039719,150.306244 
	C222.839905,151.320007 218.091614,154.867767 213.310455,157.571228 
	C212.609558,157.967545 212.710205,160.054169 212.702896,161.360153 
	C212.655396,169.857285 212.521057,178.360458 212.820953,186.847321 
	C212.878632,188.479736 214.391495,190.529358 215.827423,191.551544 
	C219.331543,194.046005 223.387436,195.773468 226.853027,198.312271 
	C233.683411,203.316040 237.602631,209.812973 237.035995,218.770340 
	C236.595078,225.740326 236.792908,232.765152 237.002502,239.756729 
	C237.139633,244.330765 236.681000,248.156586 231.151184,249.054184 
	C230.687820,249.129410 230.347778,249.964371 229.647491,250.813873 
	C230.844894,251.481125 232.026031,251.800598 232.676193,252.569199 
	C234.230713,254.406921 236.649811,256.401947 236.748413,258.429352 
	C237.184860,267.404877 237.007080,276.415588 236.853302,285.410187 
	C236.820282,287.342041 236.594528,289.955597 235.375076,291.061432 
	C230.561020,295.426971 231.743576,300.945068 231.672852,306.277039 
	C231.641907,308.609222 231.818802,310.956848 231.609512,313.271088 
	C231.252441,317.219727 229.273804,319.940643 225.022415,320.008514 
	C217.360199,320.130798 209.691132,320.184601 202.031876,319.991180 
	C197.610626,319.879517 195.492126,317.065399 195.425186,312.782959 
	C195.339874,307.326263 195.404510,301.867218 195.404510,296.168335 
	C148.720657,296.168335 102.473457,296.168335 55.513474,296.168335 
	C55.513474,301.296143 55.551846,306.380676 55.503872,311.464386 
	C55.442383,317.979889 53.350456,320.026703 46.755177,320.056305 
	C40.257290,320.085510 33.758564,320.116913 27.261332,320.045197 
	C21.778061,319.984650 19.432152,317.653076 19.240877,312.134674 
	C19.137053,309.139191 19.214073,306.137115 19.223721,303.138062 
	C19.236862,299.052338 19.607344,295.138855 16.024746,291.731842 
	C14.428540,290.213898 14.194024,286.806488 14.117600,284.233582 
	C13.885201,276.409485 14.190658,268.569611 13.968126,260.744965 
	C13.840115,256.243866 14.595337,252.787140 19.806965,252.000076 
	C20.284555,251.927948 20.649996,251.113220 20.975080,250.747375 
	C20.862631,250.339981 20.854427,250.061829 20.768822,250.035507 
	C13.282001,247.734680 13.716870,241.804932 13.975735,235.737167 
	C14.224071,229.916199 14.322376,224.057999 13.958616,218.249222 
	C13.450212,210.130661 16.884289,204.026657 22.946247,199.225952 
	C26.058767,196.761017 29.351772,194.144974 33.006897,192.838409 
	C37.771027,191.135406 38.558529,188.283035 38.343830,183.816971 
	C37.992191,176.502548 38.413868,169.151978 38.104935,161.833740 
	C38.031860,160.102814 36.351933,158.439743 35.194916,156.079193 
	C34.984726,154.696426 34.990791,153.979950 35.400463,153.367813 
	C36.621445,153.080902 38.149406,152.696396 38.153210,152.297363 
	C38.277859,139.214096 38.256184,126.129433 38.256184,112.306213 
	C35.042904,113.691811 32.532238,114.774429 30.014168,115.503136 
	C30.006672,114.442169 30.006577,113.735115 30.006481,113.028069 
M91.549789,158.964218 
	C89.483154,158.148819 87.436111,156.693710 85.346474,156.629730 
	C76.689842,156.364655 68.020264,156.537552 59.355610,156.504700 
	C57.834259,156.498932 56.313728,156.277908 54.792820,156.156311 
	C54.815262,155.736725 54.837704,155.317139 54.860149,154.897552 
	C72.087158,154.897552 89.314163,154.897552 106.541176,154.897552 
	C106.577919,155.311798 106.614655,155.726059 106.651398,156.140305 
	C102.599083,156.370468 98.546776,156.600616 94.494461,156.830780 
	C94.396690,157.466003 94.298912,158.101242 94.201141,158.736481 
	C98.164490,159.713104 102.099083,161.361618 106.096916,161.532745 
	C115.743683,161.945740 125.420006,161.668503 135.084412,161.669083 
	C142.496994,161.669525 149.909561,161.669174 157.322144,161.669174 
	C157.508347,161.039230 157.694550,160.409286 157.880753,159.779358 
	C154.911652,158.690903 151.982269,156.816223 148.965897,156.663910 
	C140.489441,156.235931 131.977112,156.534576 123.479080,156.503098 
	C121.980469,156.497543 120.482628,156.281555 118.984436,156.162750 
	C119.009949,155.738770 119.035461,155.314804 119.060974,154.890839 
	C136.272812,154.890839 153.484650,154.890839 170.696472,154.890839 
	C170.718094,155.305023 170.739716,155.719223 170.761322,156.133408 
	C166.832016,156.359253 162.902710,156.585083 158.973404,156.810928 
	C158.840881,157.295792 158.708344,157.780640 158.575806,158.265503 
	C161.647934,159.400589 164.679382,161.360596 167.799881,161.514420 
	C176.776016,161.956940 185.788986,161.744034 194.785889,161.644958 
	C201.780579,161.567947 204.645798,158.577072 204.682831,151.433899 
	C204.740707,140.269989 204.756348,129.105286 204.689575,117.941498 
	C204.644196,110.351677 201.237091,107.000351 193.670929,106.986176 
	C177.674469,106.956207 161.677917,106.975937 145.681396,106.975517 
	C116.187820,106.974739 86.694237,106.962410 57.200672,106.982269 
	C50.455376,106.986816 46.478638,110.050362 46.363464,116.053474 
	C46.123791,128.545837 46.202980,141.047012 46.340534,153.542480 
	C46.389004,157.945831 49.007935,161.186310 53.311131,161.324081 
	C66.125023,161.734344 78.956879,161.590240 91.781517,161.565338 
	C91.912750,161.565094 92.041428,160.248398 91.549789,158.964218 
M131.499908,245.224380 
	C145.314987,245.225845 159.130173,245.257034 172.945114,245.214828 
	C178.892288,245.196671 181.136215,243.024704 181.160950,237.149017 
	C181.223999,222.169083 181.224350,207.188614 181.175766,192.208618 
	C181.155640,186.002930 178.592316,183.327545 172.399445,183.316711 
	C141.107559,183.262009 109.815445,183.269287 78.523552,183.329086 
	C72.332970,183.340927 69.817490,185.984207 69.797958,192.243393 
	C69.751717,207.057007 69.756302,221.870956 69.802841,236.684586 
	C69.823357,243.216507 71.893356,245.206085 78.568481,245.215820 
	C95.878914,245.241043 113.189407,245.224350 131.499908,245.224380 
M53.142967,221.912170 
	C46.835487,221.911972 40.528004,221.911636 34.220524,221.911606 
	C21.432209,221.911530 21.543419,221.910233 21.701027,234.874512 
	C21.754766,239.295013 23.484758,241.287872 27.910919,241.213989 
	C34.050705,241.111496 40.193508,241.190872 46.335022,241.190720 
	C59.831783,241.190384 59.771950,241.192169 59.272629,227.692642 
	C59.140339,224.116028 57.866287,221.981781 53.142967,221.912170 
M217.434280,241.191284 
	C229.264145,241.171692 229.264038,241.171692 229.208511,229.441528 
	C229.206146,228.941574 229.187546,228.440475 229.213181,227.941803 
	C229.430023,223.726013 227.386139,221.836090 223.218063,221.883789 
	C217.052551,221.954346 210.885712,221.910034 204.719437,221.910690 
	C191.073486,221.912155 191.146774,221.908295 191.675995,235.413483 
	C191.830826,239.364517 193.500336,241.225418 197.454910,241.194504 
	C203.787430,241.145004 210.120651,241.187668 217.434280,241.191284 
M215.543884,113.440002 
	C213.397888,112.321297 212.590668,112.989700 212.631470,115.377098 
	C212.722290,120.690773 212.662338,126.007027 212.662735,131.322235 
	C212.663300,138.879913 212.662888,146.437592 212.662888,155.023499 
	C217.190903,152.197708 220.888992,149.963776 224.472885,147.559555 
	C224.920273,147.259430 224.867935,146.058472 224.870102,145.274414 
	C224.895172,136.196274 224.886108,127.118019 224.886108,117.961540 
	C221.952988,116.552361 219.119186,115.190895 215.543884,113.440002 
M84.545662,256.923615 
	C81.904945,256.639740 79.264229,256.355865 76.559052,256.065094 
	C76.559052,261.513000 76.559052,266.073700 76.559052,270.591278 
	C83.841103,271.511353 85.615623,271.088074 85.809250,267.778870 
	C86.007378,264.392609 85.398567,260.959167 84.545662,256.923615 
M169.741180,256.171204 
	C164.964905,257.093048 163.704666,259.720154 165.099747,267.396149 
	C166.193329,273.413147 170.848969,270.327301 174.695953,270.949677 
	C174.695953,267.086517 174.483551,263.634491 174.756760,260.221313 
	C175.020615,256.925262 173.872330,255.597046 169.741180,256.171204 
M72.033943,263.518799 
	C72.033943,261.232269 72.033943,258.945709 72.033943,255.294128 
	C68.450829,256.375732 63.876484,256.543640 63.250900,258.201508 
	C62.003418,261.507568 62.050873,265.970551 63.331001,269.269867 
	C63.938023,270.834381 68.609840,270.821747 72.032547,271.670532 
	C72.032547,268.405457 72.032547,266.436340 72.033943,263.518799 
M188.498596,261.014374 
	C187.576874,255.961502 186.648987,255.522812 179.335114,256.735474 
	C179.335114,261.431091 179.335114,266.135040 179.335114,270.803864 
	C188.517807,271.325134 188.517807,271.325134 188.502396,262.866547 
	C188.501785,262.533905 188.501938,262.201294 188.498596,261.014374 
M199.581253,168.994492 
	C197.678101,170.613159 195.774933,172.231827 193.871780,173.850494 
	C194.289474,174.304413 194.707169,174.758347 195.124863,175.212280 
	C198.355240,172.545074 203.275635,171.732849 204.579575,164.974625 
	C202.419327,166.700714 201.277740,167.612885 199.581253,168.994492 
M46.810848,166.706787 
	C47.999622,171.968719 52.860680,172.671738 56.175961,175.293747 
	C56.558464,174.841827 56.940964,174.389893 57.323463,173.937973 
	C53.972626,171.330002 50.621792,168.722015 46.810848,166.706787 
z"
      />
      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M198.949860,57.999924 
	C198.949860,65.621071 198.949860,72.742256 198.949860,79.805710 
	C207.019577,80.687103 207.548096,81.429245 206.505707,89.382454 
	C198.199097,87.592690 189.852676,85.794342 181.232788,83.937080 
	C181.111923,79.437065 185.113068,80.312363 188.890823,80.049568 
	C188.890823,78.330521 188.890533,76.751556 188.890869,75.172585 
	C188.894318,58.372604 188.961670,41.572269 188.869492,24.772814 
	C188.833389,18.194426 190.992157,12.469975 194.549271,7.162277 
	C202.569519,9.634995 203.574310,11.887782 200.586929,18.880850 
	C199.578171,21.242210 199.071533,23.983397 199.027985,26.562691 
	C198.853912,36.872616 198.952286,47.187138 198.949860,57.999924 
z"
      />
      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M62.071354,40.000137 
	C62.071354,53.607567 62.071354,66.715042 62.071354,79.782150 
	C65.408218,80.580696 69.716125,79.143997 69.734268,84.904160 
	C65.347115,85.227554 60.906139,85.177422 56.624821,85.979507 
	C52.559780,86.741074 48.661823,88.394478 44.703037,89.651703 
	C43.164978,81.733894 43.937088,80.584549 51.649971,79.913284 
	C51.768860,78.885651 52.003666,77.794975 52.004982,76.704025 
	C52.025234,59.908726 52.071800,43.112976 51.948769,26.318527 
	C51.931030,23.897257 51.455540,21.316729 50.517403,19.094656 
	C47.442787,11.812076 48.112103,10.120307 56.341473,7.089249 
	C59.719471,12.017624 62.009800,17.362066 62.046227,23.536346 
	C62.077618,28.857489 62.064690,34.178894 62.071354,40.000137 
z"
      />
      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M34.996853,153.263458 
	C34.990791,153.979950 34.984726,154.696426 34.965935,155.770966 
	C33.230946,155.251785 31.571457,154.207001 29.772947,153.533386 
	C26.369692,152.258743 22.960913,150.800797 19.419844,150.137024 
	C13.634473,149.052628 11.051526,146.440369 10.997386,140.420380 
	C10.951108,135.274628 10.910980,130.126633 11.009600,124.982338 
	C11.116036,119.430252 13.612690,116.911545 19.110464,116.178719 
	C21.521828,115.857277 23.877470,115.117821 26.614685,114.807098 
	C27.001511,115.765877 27.032064,116.485741 26.764441,117.515259 
	C26.466263,127.654198 26.466263,137.483475 26.466263,148.469925 
	C28.377108,149.543671 31.686981,151.403564 34.996853,153.263458 
z"
      />
      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M27.062618,117.205597 
	C27.032064,116.485741 27.001511,115.765877 26.960533,114.685715 
	C27.740559,113.881645 28.531008,113.437881 29.663971,113.011093 
	C30.006577,113.735115 30.006672,114.442169 29.772099,115.732559 
	C28.712492,116.612457 27.887554,116.909027 27.062618,117.205597 
z"
      />

      <Path
        fill={color}
        opacity="1.000000"
        stroke="none"
        d="
M130.999893,245.224396 
	C113.189407,245.224350 95.878914,245.241043 78.568481,245.215820 
	C71.893356,245.206085 69.823357,243.216507 69.802841,236.684586 
	C69.756302,221.870956 69.751717,207.057007 69.797958,192.243393 
	C69.817490,185.984207 72.332970,183.340927 78.523552,183.329086 
	C109.815445,183.269287 141.107559,183.262009 172.399445,183.316711 
	C178.592316,183.327545 181.155640,186.002930 181.175766,192.208618 
	C181.224350,207.188614 181.223999,222.169083 181.160950,237.149017 
	C181.136215,243.024704 178.892288,245.196671 172.945114,245.214828 
	C159.130173,245.257034 145.314987,245.225845 130.999893,245.224396 
M96.502243,238.759933 
	C120.484436,238.762146 144.466690,238.740067 168.448746,238.796997 
	C171.484406,238.804199 173.656860,238.407166 173.657867,234.584518 
	C173.658752,231.151077 171.912399,230.400482 168.948486,230.405319 
	C139.803543,230.452744 110.658455,230.458145 81.513489,230.417145 
	C78.552910,230.412979 77.262573,231.590790 77.327896,234.574203 
	C77.390358,237.427032 78.463417,238.875946 81.514908,238.794815 
	C86.174850,238.670914 90.840469,238.760818 96.502243,238.759933 
M91.513046,190.731659 
	C88.682648,190.732040 85.850197,190.800217 83.022423,190.714249 
	C80.043297,190.623657 77.246017,190.407669 77.322540,194.784637 
	C77.401115,199.279083 80.488068,198.631744 83.283348,198.635986 
	C89.277138,198.645081 95.270950,198.637405 101.264755,198.636841 
	C123.575012,198.634735 145.885483,198.582687 168.195297,198.681290 
	C171.796768,198.697189 174.001907,198.043610 173.572586,193.761749 
	C173.209915,190.144714 170.662750,190.741577 168.429764,190.739639 
	C143.122604,190.717682 117.815407,190.729141 91.513046,190.731659 
M87.599808,217.210953 
	C86.100548,217.211609 84.600960,217.232437 83.102089,217.208633 
	C80.196503,217.162476 77.312592,216.831558 77.334618,221.265854 
	C77.356995,225.769409 80.349670,225.176758 83.174217,225.176147 
	C106.995613,225.170959 130.817017,225.174454 154.638412,225.174637 
	C159.469315,225.174683 164.301041,225.225479 169.130875,225.153290 
	C172.985275,225.095718 174.924881,222.744568 173.233261,219.555878 
	C172.528137,218.226715 169.831573,217.310028 168.034805,217.300629 
	C141.548813,217.162277 115.061859,217.208527 87.599808,217.210953 
M127.499992,211.913071 
	C140.981018,211.914551 154.462067,211.900604 167.943024,211.929626 
	C170.886780,211.935959 173.677948,212.223404 173.581726,207.785248 
	C173.491699,203.631622 170.845566,203.979309 168.116898,203.980637 
	C139.656998,203.994461 111.197098,204.003418 82.737221,203.976776 
	C79.930855,203.974152 77.379555,203.775589 77.346001,207.855637 
	C77.313545,211.801895 79.596069,211.960678 82.562035,211.946594 
	C97.207748,211.877090 111.853951,211.913803 127.499992,211.913071 
z"
      />
      <Path
        fill="#fcb103"
        opacity={0}
        stroke="none"
        d="
M216.943939,241.191345 
	C210.120651,241.187668 203.787430,241.145004 197.454910,241.194504 
	C193.500336,241.225418 191.830826,239.364517 191.675995,235.413483 
	C191.146774,221.908295 191.073486,221.912155 204.719437,221.910690 
	C210.885712,221.910034 217.052551,221.954346 223.218063,221.883789 
	C227.386139,221.836090 229.430023,223.726013 229.213181,227.941803 
	C229.187546,228.440475 229.206146,228.941574 229.208511,229.441528 
	C229.264038,241.171692 229.264145,241.171692 216.943939,241.191345 
z"
      />
      <Path
        fill="#fcb103"
        opacity={0}
        stroke="none"
        d="
M53.603760,221.913025 
	C57.866287,221.981781 59.140339,224.116028 59.272629,227.692642 
	C59.771950,241.192169 59.831783,241.190384 46.335022,241.190720 
	C40.193508,241.190872 34.050705,241.111496 27.910919,241.213989 
	C23.484758,241.287872 21.754766,239.295013 21.701027,234.874512 
	C21.543419,221.910233 21.432209,221.911530 34.220524,221.911606 
	C40.528004,221.911636 46.835487,221.911972 53.603760,221.913025 
z"
      />
    </Svg>
  )
}

export default TruckIcon1
