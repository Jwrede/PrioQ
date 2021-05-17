<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 296.999 296.999"
    style="enable-background: new 0 0 296.999 296.999"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-if="icon === 'read'"
    :id="svgID"
  >
    <g>
      <a :id="svgID">
        <path
          d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543
				v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382
				C115.322,40.849,70.226,35.107,45.432,35.049z"
        />
        <path
          d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0
				c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779
				c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"
        />
        <path
          d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344
				c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427
				C297,76.568,292.232,71.801,286.373,71.801z"
        />
        <path
          d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301
				c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342
				C30.49,232.13,18.332,219.963,18.332,205.042z"
        />
      </a>
    </g>
  </svg>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 482.568 482.568"
    style="enable-background: new 0 0 482.568 482.568"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'preferences'"
    :id="svgID"
  >
    <g>
      <a :id="svgID">
        <path
          d="M116.993,203.218c13.4-1.8,26.8,2.8,36.3,12.3l24,24l22.7-22.6l-32.8-32.7c-5.1-5.1-5.1-13.4,0-18.5s13.4-5.1,18.5,0
			l32.8,32.8l22.7-22.6l-24.1-24.1c-9.5-9.5-14.1-23-12.3-36.3c4-30.4-5.7-62.2-29-85.6c-23.8-23.8-56.4-33.4-87.3-28.8
			c-4.9,0.7-6.9,6.8-3.4,10.3l30.9,30.9c14.7,14.7,14.7,38.5,0,53.1l-19,19c-14.7,14.7-38.5,14.7-53.1,0l-31-30.9
			c-3.5-3.5-9.5-1.5-10.3,3.4c-4.6,30.9,5,63.5,28.8,87.3C54.793,197.518,86.593,207.218,116.993,203.218z"
        />
        <path
          d="M309.193,243.918l-22.7,22.6l134.8,134.8c5.1,5.1,5.1,13.4,0,18.5s-13.4,5.1-18.5,0l-134.8-134.8l-22.7,22.6l138.9,138.9
			c17.6,17.6,46.1,17.5,63.7-0.1s17.6-46.1,0.1-63.7L309.193,243.918z"
        />
        <path
          d="M361.293,153.918h59.9l59.9-119.7l-29.9-29.9l-119.8,59.8v59.9l-162.8,162.3l-29.3-29.2l-118,118
			c-24.6,24.6-24.6,64.4,0,89s64.4,24.6,89,0l118-118l-29.9-29.9L361.293,153.918z"
        />
      </a>
    </g>
  </svg>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 459.75 459.75"
    style="enable-background: new 0 0 459.75 459.75"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'stats'"
    :id="svgID"
  >
    <g>
      <a :id="svgID">
        <path
          d="M447.652,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138
		c6.681,0,12.098-5.416,12.098-12.098v-95.805C459.75,309.546,454.334,304.13,447.652,304.13z"
        />
        <path
          d="M348.798,258.13H308.66c-6.681,0-12.098,5.416-12.098,12.097v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138
		c6.681,0,12.097-5.416,12.097-12.098V270.228C360.896,263.546,355.48,258.13,348.798,258.13z"
        />
        <path
          d="M151.09,304.13h-40.138c-6.681,0-12.097,5.416-12.097,12.097v95.805c0,6.681,5.416,12.098,12.097,12.098h40.138
		c6.681,0,12.098-5.416,12.098-12.098v-95.805C163.188,309.546,157.771,304.13,151.09,304.13z"
        />
        <path
          d="M52.236,258.13H12.098C5.416,258.13,0,263.546,0,270.228v141.805c0,6.681,5.416,12.098,12.098,12.098h40.138
		c6.681,0,12.097-5.416,12.097-12.098V270.228C64.333,263.546,58.917,258.13,52.236,258.13z"
        />
        <path
          d="M249.944,196.968h-40.138c-6.681,0-12.098,5.416-12.098,12.098v202.967c0,6.681,5.416,12.098,12.098,12.098h40.138
		c6.681,0,12.098-5.416,12.098-12.098V209.066C262.042,202.384,256.625,196.968,249.944,196.968z"
        />
        <path
          d="M436.869,244.62c8.14,0,15-6.633,15-15v-48.479c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v12.119L269.52,40.044
		c-3.148-3.165-7.536-4.767-11.989-4.362c-4.446,0.403-8.482,2.765-11.011,6.445L131.745,209.185L30.942,144.969
		c-6.987-4.451-16.26-2.396-20.71,4.592c-4.451,6.987-2.396,16.259,4.592,20.71l113.021,72c2.495,1.589,5.286,2.351,8.046,2.351
		c4.783,0,9.475-2.285,12.376-6.507L261.003,74.025L400.8,214.62h-12.41c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15
		c6.71,0,41.649,0,48.443,0H436.869z"
        />
      </a>
    </g>
  </svg>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 42.834 42.834"
    style="enable-background: new 0 0 42.834 42.834"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'library'"
    :id="svgID"
  >
    <g>
      <a :id="svgID">
        <path
          d="M42.834,19.958c0-0.828-0.671-1.5-1.5-1.5h-2.833v-7.332h2.833c0.829,0,1.5-0.672,1.5-1.5c0-0.829-0.671-1.5-1.5-1.5H6.667
		C2.991,8.126,0,11.116,0,14.792c0,3.43,2.605,6.262,5.94,6.625C2.605,21.78,0,24.612,0,28.042c0,3.676,2.991,6.666,6.667,6.666
		h34.667c0.829,0,1.5-0.671,1.5-1.5c0-0.828-0.671-1.5-1.5-1.5h-2.833v-7.332h2.833c0.829,0,1.5-0.672,1.5-1.5
		c0-0.713-0.497-1.305-1.162-1.459C42.336,21.263,42.834,20.671,42.834,19.958z M5.83,16.874v-5.268c0-0.275,0.224-0.5,0.5-0.5
		h5.545c0.276,0,0.5,0.225,0.5,0.5v5.268c0,0.203-0.124,0.387-0.313,0.463c-0.061,0.025-0.125,0.037-0.188,0.037
		c-0.133,0-0.263-0.053-0.359-0.152l-2.413-2.494l-2.413,2.494c-0.142,0.146-0.36,0.192-0.547,0.115
		C5.954,17.261,5.83,17.077,5.83,16.874z M12.375,30.124c0,0.203-0.124,0.387-0.313,0.463c-0.061,0.025-0.125,0.037-0.188,0.037
		c-0.133,0-0.263-0.053-0.359-0.152l-2.413-2.494l-2.413,2.494c-0.142,0.146-0.36,0.192-0.547,0.115
		c-0.189-0.076-0.313-0.26-0.313-0.463v-5.268c0-0.275,0.224-0.5,0.5-0.5h5.545c0.276,0,0.5,0.225,0.5,0.5L12.375,30.124
		L12.375,30.124z"
        />
      </a>
    </g>
  </svg>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'search'"
  >
    <g data-name="Layer 2" id="Layer_2">
      <path
        d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"
      />
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 11 13 10"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'back'"
  >
    <g>
      <polygon points="12,18 6,18 6,22 0,16 6,10 6,14 12,14 			" />
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="19 9.5 13 13"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'forward'"
  >
    <g>
      <polygon points="20,14 26,14 26,10 32,16 26,22 26,18 20,18 			" />
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'checkmark'"
  >
    <path
      d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'times'"
  >
    <path
      d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
    />
  </svg>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 438.529 438.529"
    style="enable-background: new 0 0 438.529 438.529"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'trash'"
  >
    <g>
      <g>
        <path
          d="M417.689,75.654c-1.711-1.709-3.901-2.568-6.563-2.568h-88.224L302.917,25.41c-2.854-7.044-7.994-13.04-15.413-17.989
			C280.078,2.473,272.556,0,264.945,0h-91.363c-7.611,0-15.131,2.473-22.554,7.421c-7.424,4.949-12.563,10.944-15.419,17.989
			l-19.985,47.676h-88.22c-2.667,0-4.853,0.859-6.567,2.568c-1.709,1.713-2.568,3.903-2.568,6.567v18.274
			c0,2.664,0.855,4.854,2.568,6.564c1.714,1.712,3.904,2.568,6.567,2.568h27.406v271.8c0,15.803,4.473,29.266,13.418,40.398
			c8.947,11.139,19.701,16.703,32.264,16.703h237.542c12.566,0,23.319-5.756,32.265-17.268c8.945-11.52,13.415-25.174,13.415-40.971
			V109.627h27.411c2.662,0,4.853-0.856,6.563-2.568c1.708-1.709,2.57-3.9,2.57-6.564V82.221
			C420.26,79.557,419.397,77.367,417.689,75.654z M169.301,39.678c1.331-1.712,2.95-2.762,4.853-3.14h90.504
			c1.903,0.381,3.525,1.43,4.854,3.14l13.709,33.404H155.311L169.301,39.678z M347.173,380.291c0,4.186-0.664,8.042-1.999,11.561
			c-1.334,3.518-2.717,6.088-4.141,7.706c-1.431,1.622-2.423,2.427-2.998,2.427H100.493c-0.571,0-1.565-0.805-2.996-2.427
			c-1.429-1.618-2.81-4.188-4.143-7.706c-1.331-3.519-1.997-7.379-1.997-11.561V109.627h255.815V380.291z"
        />
        <path
          d="M137.04,347.172h18.271c2.667,0,4.858-0.855,6.567-2.567c1.709-1.718,2.568-3.901,2.568-6.57V173.581
			c0-2.663-0.859-4.853-2.568-6.567c-1.714-1.709-3.899-2.565-6.567-2.565H137.04c-2.667,0-4.854,0.855-6.567,2.565
			c-1.711,1.714-2.568,3.904-2.568,6.567v164.454c0,2.669,0.854,4.853,2.568,6.57C132.186,346.316,134.373,347.172,137.04,347.172z"
        />
        <path
          d="M210.129,347.172h18.271c2.666,0,4.856-0.855,6.564-2.567c1.718-1.718,2.569-3.901,2.569-6.57V173.581
			c0-2.663-0.852-4.853-2.569-6.567c-1.708-1.709-3.898-2.565-6.564-2.565h-18.271c-2.664,0-4.854,0.855-6.567,2.565
			c-1.714,1.714-2.568,3.904-2.568,6.567v164.454c0,2.669,0.854,4.853,2.568,6.57C205.274,346.316,207.465,347.172,210.129,347.172z
			"
        />
        <path
          d="M283.22,347.172h18.268c2.669,0,4.859-0.855,6.57-2.567c1.711-1.718,2.562-3.901,2.562-6.57V173.581
			c0-2.663-0.852-4.853-2.562-6.567c-1.711-1.709-3.901-2.565-6.57-2.565H283.22c-2.67,0-4.853,0.855-6.571,2.565
			c-1.711,1.714-2.566,3.904-2.566,6.567v164.454c0,2.669,0.855,4.853,2.566,6.57C278.367,346.316,280.55,347.172,283.22,347.172z"
        />
      </g>
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'plus'"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
    />
  </svg>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 383.947 383.947"
    xml:space="preserve"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'edit'"
  >
    <g>
      <g>
        <g>
          <polygon
            points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"
          />
          <path
            d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04
				C386.027,77.92,386.027,64.373,377.707,56.053z"
          />
        </g>
      </g>
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'next'"
  >
    <path d="M22 12l-20 12 5-12-5-12z" />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="'fill: ' + color"
    :height="height"
    :width="width"
    v-else-if="icon === 'top'"
  >
    <path
      d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
		c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
		c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"
    />
  </svg>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    id="svg2"
    sodipodi:version="0.32"
    inkscape:version="0.46"
    sodipodi:docbase="/home/alex/Projects/Anki/Anki_Icons"
    sodipodi:docname="FC.svg"
    version="1.0"
    inkscape:export-filename="/home/alex/Downloads/fcwx/FC.png"
    inkscape:export-xdpi="180"
    inkscape:export-ydpi="180"
    inkscape:output_extension="org.inkscape.output.svg.inkscape"
    :height="height"
    :width="width"
    v-else-if="icon === 'anki'"
  >
    <defs id="defs4">
      <linearGradient inkscape:collect="always" id="linearGradient3800">
        <stop
          style="stop-color: #333; stop-opacity: 1"
          offset="0"
          id="stop3802"
        />
        <stop
          style="stop-color: #9f9f9f; stop-opacity: 1"
          offset="1"
          id="stop3804"
        />
      </linearGradient>
      <linearGradient id="linearGradient3769" inkscape:collect="always">
        <stop
          id="stop3771"
          offset="0"
          style="stop-color: #3c3c3c; stop-opacity: 1"
        />
        <stop
          id="stop3773"
          offset="1"
          style="stop-color: #9e9e9e; stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient id="linearGradient2878" inkscape:collect="always">
        <stop
          id="stop2880"
          offset="0"
          style="stop-color: black; stop-opacity: 1"
        />
        <stop
          id="stop2882"
          offset="1"
          style="stop-color: #898989; stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient id="linearGradient4843">
        <stop
          style="stop-color: white; stop-opacity: 0.49411765"
          offset="0"
          id="stop4845"
        />
        <stop
          style="stop-color: white; stop-opacity: 0.25098041"
          offset="1"
          id="stop4847"
        />
      </linearGradient>
      <linearGradient id="linearGradient4825">
        <stop
          id="stop4827"
          offset="0"
          style="stop-color: #0084dd; stop-opacity: 1"
        />
        <stop
          id="stop4829"
          offset="1"
          style="stop-color: white; stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient3769"
        id="linearGradient4926"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient4928"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient4930"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient4932"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2815">
        <rect
          style="
            opacity: 1;
            fill: #d533e4;
            fill-opacity: 0.54098361;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="rect1913"
          width="23"
          height="30"
          x="5"
          y="1"
          ry="4.6187186"
          rx="4.6187186"
        />
      </clipPath>
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient1942"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient1948"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2868">
        <rect
          style="
            opacity: 1;
            fill: none;
            fill-opacity: 1;
            stroke: black;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="rect1950"
          width="41"
          height="28"
          x="19.880381"
          y="16.849239"
          ry="4"
          rx="4"
        />
      </clipPath>
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient2874"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient3800"
        id="linearGradient3789"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3795"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient3798"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3824"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient3826"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3828"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3842"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient3844"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3846"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3860"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient3862"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3864"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3914"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3916"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3932"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3934"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3986"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient3988"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient3990"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3992"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="17.857143"
        y1="-11.398471"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3994"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient3996"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4004">
        <rect
          rx="4.6187186"
          ry="4.6187186"
          y="1"
          x="5"
          height="30"
          width="45"
          id="rect4000"
          style="
            opacity: 1;
            fill: #d533e4;
            fill-opacity: 0.54098361;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4011">
        <rect
          rx="4"
          ry="4"
          y="16.849239"
          x="19.880381"
          height="28"
          width="43"
          id="rect4002"
          style="
            opacity: 1;
            fill: #e51be8;
            fill-opacity: 0.53551911;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
      </clipPath>
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient1982"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="17.857143"
        y1="-11.398471"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient3769"
        id="linearGradient2973"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient2975"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient2977"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient2979"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient2981"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient2983"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient2985"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient3800"
        id="linearGradient2987"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4825"
        id="linearGradient2989"
        gradientUnits="userSpaceOnUse"
        x1="253.74718"
        y1="412.82977"
        x2="188.00023"
        y2="542.33295"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient4843"
        id="linearGradient2991"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.240924e-2,0,0,9.240924e-2,-5.65772,-25.6423)"
        x1="247"
        y1="441.86218"
        x2="292"
        y2="282.36218"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient2993"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient2995"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient2997"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="15.5"
        y1="5.9497476"
        x2="4"
        y2="31"
      />
      <linearGradient
        inkscape:collect="always"
        xlink:href="#linearGradient2878"
        id="linearGradient2999"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.954545,0,0,0.965517,1.704545,0.551724)"
        x1="17.857143"
        y1="-11.398471"
        x2="4"
        y2="31"
      />
    </defs>
    <g
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      id="layer1"
      style="display: inline"
    >
      <rect
        style="
          opacity: 0;
          fill: #9e9e9e;
          fill-opacity: 1;
          stroke: none;
          stroke-width: 1.20000005;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        id="rect3810"
        width="113"
        height="32"
        x="32"
        y="0"
        rx="0"
        ry="0"
        inkscape:export-xdpi="180"
        inkscape:export-ydpi="180"
      />
      <g id="g2807" clip-path="url(#clipPath2815)">
        <rect
          ry="0"
          rx="0"
          y="0"
          x="0"
          height="32"
          width="32"
          id="rect2802"
          style="
            opacity: 1;
            fill: black;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
        />
        <rect
          style="
            opacity: 1;
            fill: url(#linearGradient2973);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="rect4875"
          width="21"
          height="28"
          x="6"
          y="2"
          ry="4"
          rx="4"
        />
        <path
          transform="matrix(9.169279e-2,1.148462e-2,-1.148462e-2,9.169279e-2,1.24989,-28.62005)"
          d="M 312.50679,544.32837 C 292.22283,564.49267 266.67181,512.24831 238.30815,515.92801 C 208.98482,519.73222 197.10615,576.2166 170.79974,562.71464 C 145.35427,549.65457 187.14591,509.20971 174.88145,483.37135 C 162.20203,456.65877 104.81148,462.81612 109.52348,433.6249 C 114.08126,405.38904 165.46094,432.6371 186.24474,412.98841 C 207.73177,392.67492 184.14112,339.996 213.35971,335.45679 C 241.62204,331.06614 231.58479,388.35122 256.69435,402.04602 C 282.65348,416.20418 325.46421,377.48946 338.81029,403.8753 C 351.71959,429.39759 294.13655,437.55366 288.87131,465.6662 C 283.42791,494.72991 333.47704,523.48182 312.50679,544.32837 z "
          inkscape:randomized="0"
          inkscape:rounded="0.36"
          inkscape:flatsided="false"
          sodipodi:arg2="1.4167054"
          sodipodi:arg1="0.81345017"
          sodipodi:r2="60.646587"
          sodipodi:r1="121.55363"
          sodipodi:cy="456"
          sodipodi:cx="229"
          sodipodi:sides="5"
          id="path4877"
          style="
            fill: none;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 16.23214531;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          sodipodi:type="star"
        />
        <path
          sodipodi:type="star"
          style="
            fill: url(#linearGradient2975);
            fill-opacity: 1;
            stroke: white;
            stroke-width: 15.98369503;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="path4879"
          sodipodi:sides="5"
          sodipodi:cx="229"
          sodipodi:cy="456"
          sodipodi:r1="94"
          sodipodi:r2="52"
          sodipodi:arg1="0.80032243"
          sodipodi:arg2="1.428641"
          inkscape:flatsided="false"
          inkscape:rounded="0.21"
          inkscape:randomized="0"
          d="M 294.46869,523.45259 C 285.38826,532.26594 248.89378,505.68266 236.36721,507.47547 C 223.84063,509.26829 196.26772,545.02094 185.07972,539.10841 C 173.89171,533.19589 187.8965,490.2729 182.32051,478.91342 C 176.74452,467.55395 134.22123,452.37873 136.38709,439.91124 C 138.55295,427.44375 183.70286,427.49916 192.78328,418.6858 C 201.86371,409.87245 203.15578,364.741 215.68236,362.94818 C 228.20893,361.15537 242.10833,404.11261 253.29633,410.02513 C 264.48433,415.93765 307.80617,403.2201 313.38216,414.57958 C 318.95815,425.93905 282.39853,452.43267 280.23268,464.90017 C 278.06682,477.36766 303.54911,514.63923 294.46869,523.45259 z "
          transform="matrix(7.507522e-2,4.398431e-4,-4.398431e-4,7.507522e-2,-2.36792,-12.92398)"
        />
        <path
          transform="matrix(3.131375e-2,-2.522366e-2,2.522366e-2,3.131375e-2,2.32085,0.206819)"
          d="M 294.46869,523.45259 C 285.38826,532.26594 248.89378,505.68266 236.36721,507.47547 C 223.84063,509.26829 196.26772,545.02094 185.07972,539.10841 C 173.89171,533.19589 187.8965,490.2729 182.32051,478.91342 C 176.74452,467.55395 134.22123,452.37873 136.38709,439.91124 C 138.55295,427.44375 183.70286,427.49916 192.78328,418.6858 C 201.86371,409.87245 203.15578,364.741 215.68236,362.94818 C 228.20893,361.15537 242.10833,404.11261 253.29633,410.02513 C 264.48433,415.93765 307.80617,403.2201 313.38216,414.57958 C 318.95815,425.93905 282.39853,452.43267 280.23268,464.90017 C 278.06682,477.36766 303.54911,514.63923 294.46869,523.45259 z "
          inkscape:randomized="0"
          inkscape:rounded="0.21"
          inkscape:flatsided="false"
          sodipodi:arg2="1.428641"
          sodipodi:arg1="0.80032243"
          sodipodi:r2="52"
          sodipodi:r1="94"
          sodipodi:cy="456"
          sodipodi:cx="229"
          sodipodi:sides="5"
          id="path4889"
          style="
            fill: url(#linearGradient2977);
            fill-opacity: 1;
            stroke: white;
            stroke-width: 24.86989784;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          sodipodi:type="star"
        />
        <path
          style="
            opacity: 1;
            fill: url(#linearGradient2979);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 3;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
            display: inline;
          "
          d="M 2.659112,0.45056835 L 30.289475,0.45056835 L 29.457792,20.39883 C 25.879683,16.517642 12.825421,10.535309 3.6153,10.535309 L 2.659112,0.45056835 z "
          id="path4881"
          sodipodi:nodetypes="ccccc"
        />
      </g>
      <g clip-path="url(#clipPath2815)" id="g1912" transform="translate(32,0)">
        <rect
          style="
            opacity: 1;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
          id="rect1914"
          width="32"
          height="32"
          x="0"
          y="0"
          rx="0"
          ry="0"
        />
        <rect
          rx="4"
          ry="4"
          y="2"
          x="6"
          height="28"
          width="21"
          id="rect1916"
          style="
            opacity: 1;
            fill: url(#linearGradient2981);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <g
          id="g2843"
          transform="translate(-13.88038,-14.84924)"
          clip-path="url(#clipPath2868)"
        >
          <path
            transform="matrix(0.124827,-2.362253e-2,2.362253e-2,0.124827,-4.130425,-17.39127)"
            d="M 294.46869,523.45259 C 285.38826,532.26594 248.89378,505.68266 236.36721,507.47547 C 223.84063,509.26829 196.26772,545.02094 185.07972,539.10841 C 173.89171,533.19589 187.8965,490.2729 182.32051,478.91342 C 176.74452,467.55395 134.22123,452.37873 136.38709,439.91124 C 138.55295,427.44375 183.70286,427.49916 192.78328,418.6858 C 201.86371,409.87245 203.15578,364.741 215.68236,362.94818 C 228.20893,361.15537 242.10833,404.11261 253.29633,410.02513 C 264.48433,415.93765 307.80617,403.2201 313.38216,414.57958 C 318.95815,425.93905 282.39853,452.43267 280.23268,464.90017 C 278.06682,477.36766 303.54911,514.63923 294.46869,523.45259 z "
            inkscape:randomized="0"
            inkscape:rounded="0.21"
            inkscape:flatsided="false"
            sodipodi:arg2="1.428641"
            sodipodi:arg1="0.80032243"
            sodipodi:r2="52"
            sodipodi:r1="94"
            sodipodi:cy="456"
            sodipodi:cx="229"
            sodipodi:sides="5"
            id="path1920"
            style="
              fill: url(#linearGradient2983);
              fill-opacity: 1;
              stroke: white;
              stroke-width: 15.98369503;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            sodipodi:type="star"
          />
        </g>
        <path
          sodipodi:nodetypes="ccccc"
          id="path1924"
          d="M 2.659112,0.45056835 L 30.289475,0.45056835 L 29.457792,20.39883 C 25.879683,16.517642 12.825421,10.535309 3.6153,10.535309 L 2.659112,0.45056835 z "
          style="
            opacity: 1;
            fill: url(#linearGradient2985);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 3;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
            display: inline;
          "
        />
      </g>
      <g clip-path="url(#clipPath2815)" id="g3775" transform="translate(-32,0)">
        <rect
          style="
            opacity: 1;
            fill: black;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
          id="rect3777"
          width="32"
          height="32"
          x="0"
          y="0"
          rx="0"
          ry="0"
        />
        <rect
          rx="4"
          ry="4"
          y="2"
          x="6"
          height="28"
          width="21"
          id="rect3779"
          style="
            opacity: 1;
            fill: url(#linearGradient2987);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <path
          sodipodi:type="star"
          style="
            fill: url(#linearGradient2989);
            fill-opacity: 1;
            stroke: white;
            stroke-width: 16.23214531;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="path4634"
          sodipodi:sides="5"
          sodipodi:cx="229"
          sodipodi:cy="456"
          sodipodi:r1="94"
          sodipodi:r2="52"
          sodipodi:arg1="0.80032243"
          sodipodi:arg2="1.428641"
          inkscape:flatsided="false"
          inkscape:rounded="0.21"
          inkscape:randomized="0"
          d="M 294.46869,523.45259 C 285.38826,532.26594 248.89378,505.68266 236.36721,507.47547 C 223.84063,509.26829 196.26772,545.02094 185.07972,539.10841 C 173.89171,533.19589 187.8965,490.2729 182.32051,478.91342 C 176.74452,467.55395 134.22123,452.37873 136.38709,439.91124 C 138.55295,427.44375 183.70286,427.49916 192.78328,418.6858 C 201.86371,409.87245 203.15578,364.741 215.68236,362.94818 C 228.20893,361.15537 242.10833,404.11261 253.29633,410.02513 C 264.48433,415.93765 307.80617,403.2201 313.38216,414.57958 C 318.95815,425.93905 282.39853,452.43267 280.23268,464.90017 C 278.06682,477.36766 303.54911,514.63923 294.46869,523.45259 z "
          transform="matrix(9.169279e-2,1.148462e-2,-1.148462e-2,9.169279e-2,0.65863,-27.99505)"
        />
        <path
          sodipodi:nodetypes="ccccc"
          id="path3787"
          d="M 2.659112,0.45056835 L 30.289475,0.45056835 L 29.457792,20.39883 C 25.879683,16.517642 12.825421,10.535309 3.6153,10.535309 L 2.659112,0.45056835 z "
          style="
            opacity: 1;
            fill: url(#linearGradient2991);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 3;
            stroke-miterlimit: 4;
            stroke-opacity: 1;
            display: inline;
          "
        />
      </g>
      <g transform="translate(64,0)" id="g3812" clip-path="url(#clipPath2815)">
        <rect
          ry="0"
          rx="0"
          y="0"
          x="0"
          height="32"
          width="32"
          id="rect3814"
          style="
            opacity: 1;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
        />
        <rect
          style="
            opacity: 1;
            fill: url(#linearGradient2993);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="rect3816"
          width="21"
          height="28"
          x="6"
          y="2"
          ry="4"
          rx="4"
        />
        <g
          clip-path="url(#clipPath2868)"
          transform="translate(-13.88038,-14.84924)"
          id="g3818"
        >
          <text
            xml:space="preserve"
            style="
              font-size: 28px;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              text-align: start;
              line-height: 125%;
              writing-mode: lr-tb;
              text-anchor: start;
              fill: white;
              fill-opacity: 1;
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              font-family: Bitstream Vera Sans;
            "
            x="24.875"
            y="41.375"
            id="text3806"
            sodipodi:linespacing="125%"
          >
            <tspan
              sodipodi:role="line"
              id="tspan3874"
              x="24.875"
              y="41.375"
              style="fill: white; fill-opacity: 1; stroke: none"
            >
              f
            </tspan>
          </text>
        </g>
      </g>
      <g clip-path="url(#clipPath2815)" id="g3900" transform="translate(88,0)">
        <rect
          style="
            opacity: 1;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
          id="rect3902"
          width="32"
          height="32"
          x="0"
          y="0"
          rx="0"
          ry="0"
        />
        <rect
          rx="4"
          ry="4"
          y="2"
          x="6"
          height="28"
          width="21"
          id="rect3904"
          style="
            opacity: 1;
            fill: url(#linearGradient2995);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <g
          id="g3906"
          transform="translate(-13.88038,-14.84924)"
          clip-path="url(#clipPath2868)"
        >
          <text
            sodipodi:linespacing="125%"
            id="text3908"
            y="41.375"
            x="22.375"
            style="
              font-size: 28px;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              text-align: start;
              line-height: 125%;
              writing-mode: lr-tb;
              text-anchor: start;
              fill: white;
              fill-opacity: 1;
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              font-family: Bitstream Vera Sans;
            "
            xml:space="preserve"
          >
            <tspan
              style="fill: white; fill-opacity: 1; stroke: none"
              y="41.375"
              x="22.375"
              id="tspan3910"
              sodipodi:role="line"
            >
              c
            </tspan>
          </text>
        </g>
      </g>
      <g transform="translate(112,0)" id="g3918" clip-path="url(#clipPath2815)">
        <rect
          ry="0"
          rx="0"
          y="0"
          x="0"
          height="32"
          width="32"
          id="rect3920"
          style="
            opacity: 1;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
        />
        <rect
          style="
            opacity: 1;
            fill: url(#linearGradient2997);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          id="rect3922"
          width="21"
          height="28"
          x="6"
          y="2"
          ry="4"
          rx="4"
        />
        <g
          clip-path="url(#clipPath2868)"
          transform="translate(-13.88038,-14.84924)"
          id="g3924"
        >
          <text
            xml:space="preserve"
            style="
              font-size: 28px;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              text-align: start;
              line-height: 125%;
              writing-mode: lr-tb;
              text-anchor: start;
              fill: white;
              fill-opacity: 1;
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              font-family: Bitstream Vera Sans;
            "
            x="24.875"
            y="41.375"
            id="text3926"
            sodipodi:linespacing="125%"
          >
            <tspan
              sodipodi:role="line"
              id="tspan3928"
              x="24.875"
              y="41.375"
              style="fill: white; fill-opacity: 1; stroke: none"
            >
              !
            </tspan>
          </text>
        </g>
      </g>
      <rect
        inkscape:export-ydpi="180"
        inkscape:export-xdpi="180"
        ry="0"
        rx="0"
        y="32"
        x="32"
        height="32"
        width="90"
        id="rect3936"
        style="
          opacity: 0;
          fill: #9e9e9e;
          fill-opacity: 1;
          stroke: none;
          stroke-width: 1.20000005;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
      />
      <g clip-path="url(#clipPath4004)" id="g3950" transform="translate(64,32)">
        <rect
          style="
            opacity: 1;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1.20000005;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            display: inline;
          "
          id="rect3952"
          width="52"
          height="32"
          x="0"
          y="0"
          rx="0"
          ry="0"
        />
        <rect
          rx="4"
          ry="4"
          y="2"
          x="6"
          height="28"
          width="43"
          id="rect3954"
          style="
            opacity: 1;
            fill: url(#linearGradient2999);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 1;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
        <g
          id="g3956"
          transform="translate(-13.88038,-14.84924)"
          clip-path="url(#clipPath4011)"
        >
          <text
            sodipodi:linespacing="125%"
            id="text3958"
            y="41.375"
            x="24.875"
            style="
              font-size: 28px;
              font-style: normal;
              font-variant: normal;
              font-weight: normal;
              font-stretch: normal;
              text-align: start;
              line-height: 125%;
              writing-mode: lr-tb;
              text-anchor: start;
              fill: white;
              fill-opacity: 1;
              stroke: none;
              stroke-width: 1px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              font-family: Bitstream Vera Sans;
            "
            xml:space="preserve"
          >
            <tspan
              style="fill: white; fill-opacity: 1; stroke: none"
              y="41.375"
              x="24.875"
              id="tspan3960"
              sodipodi:role="line"
            >
              fc!
            </tspan>
          </text>
        </g>
      </g>
      <use
        x="0"
        y="0"
        xlink:href="#g1912"
        id="use3998"
        transform="translate(0,32)"
        width="32"
        height="32"
      />
      <rect
        style="
          opacity: 0;
          fill: black;
          fill-opacity: 1;
          stroke: none;
          stroke-width: 1.20000005;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        id="rect1966"
        width="90"
        height="32"
        x="32"
        y="64"
        rx="0"
        ry="0"
        inkscape:export-xdpi="180"
        inkscape:export-ydpi="180"
      />
      <text
        xml:space="preserve"
        style="
          font-size: 36px;
          font-style: normal;
          font-variant: normal;
          font-weight: normal;
          font-stretch: normal;
          text-align: start;
          line-height: 125%;
          writing-mode: lr-tb;
          text-anchor: start;
          fill: white;
          fill-opacity: 1;
          stroke: none;
          stroke-width: 1px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-opacity: 1;
          font-family: Bitstream Vera Sans;
        "
        x="67.173828"
        y="93.490234"
        id="text1976"
        sodipodi:linespacing="125%"
      >
        <tspan
          sodipodi:role="line"
          id="tspan1978"
          x="67.173828"
          y="93.490234"
          style="
            font-size: 36px;
            font-style: normal;
            font-variant: normal;
            font-weight: normal;
            font-stretch: normal;
            text-align: start;
            line-height: 125%;
            writing-mode: lr-tb;
            text-anchor: start;
            fill: white;
            fill-opacity: 1;
            stroke: none;
            font-family: Bitstream Vera Sans;
          "
        >
          fc!
        </tspan>
      </text>
      <use
        height="32"
        width="32"
        transform="translate(0,64)"
        id="use1980"
        xlink:href="#g1912"
        y="0"
        x="0"
      />
    </g>
    <g
      inkscape:groupmode="layer"
      id="layer4"
      inkscape:label="Guillotine"
      style="display: none"
    >
      <rect
        style="
          fill: #0000ff;
          fill-opacity: 0.75;
          fill-rule: evenodd;
          stroke: none;
          stroke-width: 1px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-opacity: 1;
        "
        id="rect3342"
        width="23.010735"
        height="15.340489"
        x="36.972717"
        y="40.374142"
        inkscape:export-filename="/home/alex/Projects/phatcore/portfolio/images/thumbs/Anki_Main.png"
        inkscape:export-xdpi="1038.48"
        inkscape:export-ydpi="1038.48"
      />
    </g>
  </svg>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :height="height"
    :width="width"
    :style="'fill: ' + color"
    v-else-if="icon === 'gallery'"
    viewBox="0 0 45.964 45.964"
    xml:space="preserve"
  >
    <path
      d="M7.071,30.834V11.062H4.042C1.803,11.062,0,12.893,0,15.13v26.732c0,2.24,1.803,4.051,4.042,4.051h26.733
			c2.238,0,4.076-1.811,4.076-4.051v-2.92H15.179C10.733,38.943,7.071,35.281,7.071,30.834z"
    />
    <path
      d="M41.913,0.05H15.179c-2.238,0-4.066,1.813-4.066,4.051v26.733c0,2.241,1.829,4.067,4.066,4.067h26.734
			c2.237,0,4.051-1.826,4.051-4.067V4.102C45.964,1.862,44.15,0.05,41.913,0.05z M41.363,28.589
			c-0.223,0.412-0.652,0.656-1.12,0.656H17.336c-0.403,0-0.782-0.18-1.022-0.502c-0.24-0.324-0.313-0.736-0.197-1.123l3.277-10.839
			c0.216-0.713,0.818-1.24,1.554-1.361c0.736-0.12,1.476,0.19,1.908,0.797l4.582,6.437c0.617,0.867,1.812,1.082,2.689,0.484
			l4.219-2.865c0.434-0.295,0.967-0.402,1.48-0.299c0.515,0.102,0.966,0.408,1.253,0.848l4.229,6.472
			C41.564,27.687,41.585,28.179,41.363,28.589z"
    />
  </svg>
  
<svg xmlns="http://www.w3.org/2000/svg" version="1" :height="height"
    :width="width"
    v-else-if="icon === 'anki-small'">
 <path style="fill:#0088d1" d="m26.508 4.5951a5.9112 5.7568 0 0 0 -4.335 4.4509l-2.514 12.285-11.813 4.95a5.9112 5.7568 0 0 0 -0.5537 10.307l11.217 6.1233 1.1798 12.472a5.9112 5.7568 0 0 0 9.8962 3.7026l9.4502-8.4996 12.543 2.7605a5.9112 5.7568 0 0 0 6.6693 -8.0255l-5.38-11.376 6.575-10.766a5.9112 5.7568 0 0 0 -5.772 -8.656l-12.777 1.467-8.48-9.4165a5.9112 5.7568 0 0 0 -5.906 -1.7784z"/>
 <path style="fill:#e4e4e4" d="m27.676 4.4242a5.9112 5.7568 0 0 0 -1.172 0.17179 5.9112 5.7568 0 0 0 -4.3318 4.4492l-2.515 12.289-11.812 4.949a5.9112 5.7568 0 0 0 -0.5546 10.308l11.218 6.1197 1.1798 12.473a5.9112 5.7568 0 0 0 9.8936 3.7018l9.4536-8.4996 12.541 2.7619a5.9112 5.7568 0 0 0 6.6677 -8.0257l-5.378-11.375 6.574-10.765a5.9112 5.7568 0 0 0 -5.7738 -8.6594l-12.776 1.468-8.481-9.4177a5.9112 5.7568 0 0 0 -4.734 -1.9491zm0.28199 5.9686 0.008 0.0078c0 0.0004-0.01 0.0118-0.008 0.0116 0.018 0.0014 0.034 0.018-0.00002-0.01939zm0.05 0.0546 8.4257 9.359a6.0004 6.0004 0 0 0 5.1438 1.9453l12.457-1.434-6.29 10.301a6.0004 6.0004 0 0 0 -0.30399 5.6938l5.168 10.918-12.286-2.702a6.0004 6.0004 0 0 0 -5.3038 1.3979l-9.381 8.441-1.158-12.219a6.0004 6.0004 0 0 0 -3.096 -4.702l-10.711-5.848 11.301-4.734a6.0004 6.0004 0 0 0 3.5619 -4.3278l2.4719-12.09z"/>
 <path style="opacity:.2;fill:#ffffff" d="m26.504 4.5963a5.9112 5.7568 0 0 0 -2.5339 1.3422 5.9112 5.7568 0 0 0 -0.02853 0.0218 5.9112 5.7568 0 0 0 -0.0019 0.0005054 5.9112 5.7568 0 0 0 -0.0014 0.00239 5.9112 5.7568 0 0 0 -0.40815 0.40862 5.9112 5.7568 0 0 0 -0.0033 0.0029 5.9112 5.7568 0 0 0 -0.36482 0.44959 5.9112 5.7568 0 0 0 -0.0033 0.0029 5.9112 5.7568 0 0 0 -0.31597 0.48098 5.9112 5.7568 0 0 0 -0.27038 0.51527 5.9112 5.7568 0 0 0 -0.21274 0.5342 5.9112 5.7568 0 0 0 -0.0014 0.00239 5.9112 5.7568 0 0 0 -0.1556 0.55124 5.9112 5.7568 0 0 0 -0.0014 0.00239 5.9112 5.7568 0 0 0 -0.02953 0.13126 5.9112 5.7568 0 0 0 0.000506 0.00189l-2.5137 12.284-0.0019 0.000506-11.811 4.9501a5.9112 5.7568 0 0 0 -1.0329 0.55984 5.9112 5.7568 0 0 0 -0.46647 0.34944 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.4288 0.39191 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.38547 0.43288 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.33989 0.46717 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.28864 0.49994 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.23565 0.52416 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.18178 0.5441 5.9112 5.7568 0 0 0 -0.00138 0.0024 5.9112 5.7568 0 0 0 -0.059439 0.26868 5.9112 5.7568 0 0 0 -0.065198 0.29246 5.9112 5.7568 0 0 0 0.0005055 0.0019 5.9112 5.7568 0 0 0 0.27168 2.8854 5.9112 5.7568 0 0 1 -0.082944 -1.1849 5.9112 5.7568 0 0 1 0.00295 -0.16255 5.9112 5.7568 0 0 0 -0.0005057 -0.0019 5.9112 5.7568 0 0 1 0.067633 -0.57013 5.9112 5.7568 0 0 0 -0.0005055 -0.0019 5.9112 5.7568 0 0 1 0.065198 -0.29246 5.9112 5.7568 0 0 1 0.059439 -0.26868 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.18178 -0.5441 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.23565 -0.52416 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.28915 -0.49806 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.33938 -0.46906 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.38547 -0.43288 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.4288 -0.39191 5.9112 5.7568 0 0 0 0.00138 -0.0024 5.9112 5.7568 0 0 1 0.46647 -0.34944 5.9112 5.7568 0 0 1 1.0329 -0.55984l11.811-4.9501 0.0019-0.000506 2.5137-12.284a5.9112 5.7568 0 0 0 -0.000506 -0.0019 5.9112 5.7568 0 0 1 0.02691 -0.11842 5.9112 5.7568 0 0 1 0.0031 -0.01095 5.9112 5.7568 0 0 1 0.000876 -0.00428 5.9112 5.7568 0 0 1 0.05011 -0.17519 5.9112 5.7568 0 0 1 0.10548 -0.37605 5.9112 5.7568 0 0 0 0.0014 -0.00239 5.9112 5.7568 0 0 1 0.21274 -0.5342 5.9112 5.7568 0 0 1 0.27038 -0.51527 5.9112 5.7568 0 0 1 0.31597 -0.48098 5.9112 5.7568 0 0 1 0.0033 -0.0029 5.9112 5.7568 0 0 1 0.36532 -0.4477 5.9112 5.7568 0 0 1 0.0033 -0.0029 5.9112 5.7568 0 0 1 0.40764 -0.41051 5.9112 5.7568 0 0 0 0.0014 -0.00239 5.9112 5.7568 0 0 0 0.0019 -0.0005055 5.9112 5.7568 0 0 1 0.02853 -0.021799 5.9112 5.7568 0 0 1 2.5339 -1.3422 5.9112 5.7568 0 0 1 0.0038 -0.00101 5.9112 5.7568 0 0 1 0.58036 -0.11304 5.9112 5.7568 0 0 0 0.0019 -0.0005055 5.9112 5.7568 0 0 1 0.58697 -0.058199 5.9112 5.7568 0 0 1 0.58654 0.000556 5.9112 5.7568 0 0 1 0.0043 0.0008757 5.9112 5.7568 0 0 1 0.58321 0.056043 5.9112 5.7568 0 0 1 1.6933 0.50877 5.9112 5.7568 0 0 1 0.5144 0.27466 5.9112 5.7568 0 0 1 1.3552 1.1109l8.4797 9.4152 12.774-1.4675a5.9112 5.7568 0 0 1 6.2682 3.8183 5.9112 5.7568 0 0 0 -6.5276 -4.7861l-12.775 1.47-8.48-9.4175a5.9112 5.7568 0 0 0 -1.354 -1.1091 5.9112 5.7568 0 0 0 -0.515 -0.2746 5.9112 5.7568 0 0 0 -0.0043 -0.0008756 5.9112 5.7568 0 0 0 -0.54101 -0.22305 5.9112 5.7568 0 0 0 -1.148 -0.28485 5.9112 5.7568 0 0 0 -0.14332 -0.014171 5.9112 5.7568 0 0 0 -0.44417 -0.042748 5.9112 5.7568 0 0 0 -0.58654 -0.0005561 5.9112 5.7568 0 0 0 -1.1692 0.17175 5.9112 5.7568 0 0 0 -0.0038 0.00101zm-7.914 38.986 1.099 11.601a5.9112 5.7568 0 0 0 0.32236 1.3917 5.9112 5.7568 0 0 1 -0.06354 -0.4258l-1.18-12.471zm34.646-9.0529-0.11062 0.18332 5.3815 11.376a5.9112 5.7568 0 0 1 0.19382 0.48188 5.9112 5.7568 0 0 0 -0.45264 -1.4478z"/>
 <path style="opacity:.2" d="m4.6246 33.518a5.9112 5.7568 0 0 0 2.9243 4.039l7.4196 4.0477 3.6216 1.9777-0.08144-0.86989-3.799-2.0737-7.4196-4.0477a5.9112 5.7568 0 0 1 -2.6657 -3.073zm55.57-14.411a5.9112 5.7568 0 0 1 0.02029 1.7133 5.9112 5.7568 0 0 0 0.000517 0.0019 5.9112 5.7568 0 0 1 -0.10803 0.56276 5.9112 5.7568 0 0 1 -0.06467 0.21144 5.9112 5.7568 0 0 1 -0.10276 0.34095 5.9112 5.7568 0 0 1 -0.22268 0.53484 5.9112 5.7568 0 0 1 -0.27429 0.50823l-6.5763 10.766 0.36944 0.78261 6.4638-10.582 0.0019-0.000518a5.9112 5.7568 0 0 0 0.27429 -0.50823 5.9112 5.7568 0 0 0 -0.000518 -0.0019 5.9112 5.7568 0 0 0 0.22369 -0.53107 5.9112 5.7568 0 0 0 -0.000517 -0.0019 5.9112 5.7568 0 0 0 0.10276 -0.34095 5.9112 5.7568 0 0 0 0.06467 -0.21144 5.9112 5.7568 0 0 0 0.10803 -0.56276 5.9112 5.7568 0 0 0 -0.000517 -0.0019 5.9112 5.7568 0 0 0 -0.27911 -2.6792zm-21.158 31.28-9.4504 8.4992a5.9112 5.7568 0 0 1 -5.0613 1.433 5.9112 5.7568 0 0 0 -0.0019 0.000518 5.9112 5.7568 0 0 1 -2.1798 -0.84549 5.9112 5.7568 0 0 1 -1.3203 -1.1466 5.9112 5.7568 0 0 1 -0.35358 -0.45929 5.9112 5.7568 0 0 0 -0.000517 -0.0019 5.9112 5.7568 0 0 1 -0.30392 -0.49282 5.9112 5.7568 0 0 1 -0.25224 -0.5188 5.9112 5.7568 0 0 0 -0.000517 -0.0019 5.9112 5.7568 0 0 1 -0.10086 -0.2783 5.9112 5.7568 0 0 0 0.35968 1.2442 5.9112 5.7568 0 0 0 0.000517 0.0019 5.9112 5.7568 0 0 0 0.25224 0.5188 5.9112 5.7568 0 0 0 0.30392 0.49282 5.9112 5.7568 0 0 0 0.35408 0.46118 5.9112 5.7568 0 0 0 1.8288 1.437 5.9112 5.7568 0 0 0 0.537 0.23827 5.9112 5.7568 0 0 0 0.55744 0.18629 5.9112 5.7568 0 0 0 0.0019 -0.000518 5.9112 5.7568 0 0 0 0.57499 0.13104 5.9112 5.7568 0 0 0 0.0019 -0.000517 5.9112 5.7568 0 0 0 5.0613 -1.433l9.4499-8.5011 12.541 2.7624 0.0019-0.000518a5.9112 5.7568 0 0 0 0.58062 0.0992 5.9112 5.7568 0 0 0 0.0019 -0.000518 5.9112 5.7568 0 0 0 0.58721 0.04082 5.9112 5.7568 0 0 0 0.0019 -0.000518 5.9112 5.7568 0 0 0 1.1754 -0.08847 5.9112 5.7568 0 0 0 0.0019 -0.000517 5.9112 5.7568 0 0 0 0.57581 -0.13002 5.9112 5.7568 0 0 0 0.55876 -0.18612 5.9112 5.7568 0 0 0 1.0471 -0.52929 5.9112 5.7568 0 0 0 2.3325 -6.7497 5.9112 5.7568 0 0 1 -1.2722 4.6397 5.9112 5.7568 0 0 0 -0.0019 0.000517 5.9112 5.7568 0 0 1 -1.826 1.4335 5.9112 5.7568 0 0 1 -0.53844 0.23931 5.9112 5.7568 0 0 1 -0.55876 0.18612 5.9112 5.7568 0 0 1 -0.57581 0.13002 5.9112 5.7568 0 0 0 -0.0019 0.000517 5.9112 5.7568 0 0 1 -0.58292 0.07329 5.9112 5.7568 0 0 1 -0.0038 0.001 5.9112 5.7568 0 0 1 -1.1778 -0.02614 5.9112 5.7568 0 0 0 -0.0019 0.000518 5.9112 5.7568 0 0 1 -0.58062 -0.0992l-0.0019 0.000518-4.2826-0.94324z"/>
</svg>
</template>

<script>
export default {
  name: "Icons",
  props: ["icon", "color", "height", "width", "svgID"],
};
</script>
<style scoped>
</style>