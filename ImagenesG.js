
// Obtener el parámetro de la URL que especifica la categoría seleccionada
var urlParams = new URLSearchParams(window.location.search);
var categoriaSeleccionada = urlParams.get('categoria');

// Objeto que mapea los tipos de imágenes a las rutas
var imagenes = {
    ilustraciones_digitales: [
        { ruta: "https://drive.google.com/thumbnail?id=1tarrt81-eGI-JBzcHtioYpkuwRqWb9io&sz=w2048", 
        titulo: "Chibi", 
        descripcion: "Una ilustración de estilo chibi para variar.", 
        imagen1: "https://drive.google.com/thumbnail?id=1tarrt81-eGI-JBzcHtioYpkuwRqWb9io&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1vSjQXu5tpcLbl8Ct4xiA8qCdgQX52Pbe&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1o_XBxNI-gSfPD5IhS6MZkBok2igsth0u&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1JWsC5xNY_5E3aBCrLDWgPplOPUOHNlFh&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1MRT9sIcLmZZooh266FizJwnwTs8tzhzt&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1tarrt81-eGI-JBzcHtioYpkuwRqWb9io&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1sAnV1VjWv6au5DDKiRiZxITyKVFk0f_v&sz=w2048", 
        titulo: "Guerrera", 
        descripcion: "Una chica con armadura medieval para practicar los metales.", 
        imagen1: "https://drive.google.com/thumbnail?id=1sAnV1VjWv6au5DDKiRiZxITyKVFk0f_v&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1jt7k8fBM8hMoruC5Wg9Cjp0hsMEUlmi4&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1c7BV_mhS-6_kB-VHMBT5ZpZfmGvOZl2R&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=19uKCYyHITHyIZvMd2hxXPWVlPcmlfduf&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=11EwxF_DrhlFdsrqHhw1pjV11NJerDpgz&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1sAnV1VjWv6au5DDKiRiZxITyKVFk0f_v&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1bSnyrT3izCWQHMTF5JshK9IOLg_cepsv&sz=w2048", 
        titulo: "Vestido Rojo", 
        descripcion: "Una práctica de perspectiva usando una fotografia de referencia.", 
        imagen1: "https://drive.google.com/thumbnail?id=1bSnyrT3izCWQHMTF5JshK9IOLg_cepsv&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1jfIWjHusHwgIUHQuClsQC04ZeMS2Was6&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1PLarr-JD7W7kUbK9r4HX_e-GXRJL4P3I&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=11RcNtHZ0bbVEnkHK2p0YGijGepEiwrGp&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1k5eKFds-pikmZinlqnS0ZsJipYFCTd3A&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1bSnyrT3izCWQHMTF5JshK9IOLg_cepsv&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1KokanuYIQ-A82wMfLwkn8I3tSMkiiD7B&sz=w2048", 
        titulo: "Porrista", 
        descripcion: "Práctica de rostro.", 
        imagen1: "https://drive.google.com/thumbnail?id=1KokanuYIQ-A82wMfLwkn8I3tSMkiiD7B&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1_GVYef0FmmOUqXpktZ1N3dNdmIGrI9bD&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1y1Z0bG4B6thLtFoncTQOZj5ktbqMMMwK&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1q8o30BQOWKzxQqKCEiTYtLGLSzVmr384&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1hjy2MComaQOHO2DQAAWOftdIXrr2Mg5T&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1KokanuYIQ-A82wMfLwkn8I3tSMkiiD7B&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1xdWlSRVtxDRAkDFRpuXvL5SXFPsjN8o2&sz=w2048", 
        titulo: "Haumea", 
        descripcion: "Una ilustración de Haumea sin referencias.", 
        imagen1: "https://drive.google.com/thumbnail?id=1xdWlSRVtxDRAkDFRpuXvL5SXFPsjN8o2&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=18XnOpRcNcNzR_I4nloAqNdADVS4ORXJ-&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1zze2baqxFO9nE5YOQP6-7Pj95v4INJZE&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=172u_GXP4d6CW__PkfiZwE0jsXGV6kSYM&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1WvT3rMIa3XsmhmYoPw_xyKJtAj7hk8mE&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1xdWlSRVtxDRAkDFRpuXvL5SXFPsjN8o2&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1g9l0I10ZAneXGkTh41HxK_Du7SDQHH_E&sz=w2048", 
        titulo: "Minigun", 
        descripcion: "Una ilustración usando una fotografía de referencia.", 
        imagen1: "https://drive.google.com/thumbnail?id=1g9l0I10ZAneXGkTh41HxK_Du7SDQHH_E&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1_9qtOCf430YwNrwAAC4oce1XO4p8X5Lq&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1pBodmhAMPos2rYoL7JBpnN98d8cfZtYF&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=12J6l9JNEnuxI8AJA50sQ-YiSY17V3yA6&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=17FxMcVfLDQD0npoe-yg_irt9rOpqpj_3&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1g9l0I10ZAneXGkTh41HxK_Du7SDQHH_E&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1kc892yTgIix1l56gr6d9BQ7u9QT65LCY&sz=w2048", 
        titulo: "Bocchi", 
        descripcion: "Una de mis primeras ilustraciones digitales.", 
        imagen1: "https://drive.google.com/thumbnail?id=1kc892yTgIix1l56gr6d9BQ7u9QT65LCY&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1xBfV8OUbkHMtR20uVQ1WqyTJGfnLTEOn&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=122fLxM76UcKa4n-TU1wsoVmTal6rGu_w&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1qG2HVD0W5OTXb3erMSaF4wVH0cInbFSW&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1D4dwzwXwhRRjEeG1CBIwrtAuQsZoRRWz&sz=w2048", 
        imagenParallax: "https://drive.google.com/thumbnail?id=1kc892yTgIix1l56gr6d9BQ7u9QT65LCY&sz=w2048"},
        // Agrega más imágenes según sea necesario
    ],
    modelos_3d: [
        { ruta: "https://drive.google.com/thumbnail?id=1fLnNLLsPMCN9jcHowIDMgz72cRYDWexx&sz=w2048", 
        titulo: "Café 1", 
        descripcion: "Una práctica sencilla de un vaso de café.", 
        imagen1: "https://drive.google.com/thumbnail?id=1fLnNLLsPMCN9jcHowIDMgz72cRYDWexx&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1GJIjwRMX9W9RYmXXw8JH4B1guhp4yUhi&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1izOvOwlqtP_MY6-_yXP7s00MWquIVy8c&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1Vnb6jKWGakMd9Q0RQbJ7kQsF9gCD-Hpq&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1048PgntAfmDs3RVVGqRko7UbHO6qfxpg&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1fLnNLLsPMCN9jcHowIDMgz72cRYDWexx&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1iXr1Kbjxl1YsdoaA1ejCG9ovZybffoY7&sz=w2048", 
        titulo: "Café 2", 
        descripcion: "Una práctica sencilla del mismo vaso de café pero jugando con las luces.", 
        imagen1: "https://drive.google.com/thumbnail?id=1iXr1Kbjxl1YsdoaA1ejCG9ovZybffoY7&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1_DwtOkcqyA61WkuUY0zbXg0SDZpVyfJv&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=17NmxE3uKBfJKryvDZ-InVEkyAiOiwTae&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1sRX1AWTTBbYIowdTgrwcBZwAHY077Ak_&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1a0XyCbC17XMbOv7Esc5sTp9IdnWa9xLa&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1iXr1Kbjxl1YsdoaA1ejCG9ovZybffoY7&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1zs-4_A0Iw56MLJ0PJsbWo113jWiuXzOF&sz=w2048", 
        titulo: "Tamaki", 
        descripcion: "Modelo 3D de un personaje del anime Fire Force", 
        imagen1: "https://drive.google.com/thumbnail?id=1zs-4_A0Iw56MLJ0PJsbWo113jWiuXzOF&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1E7FIbzMA-Gslbyv2aKrmbYeMgt8vOQcK&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1v_O6VC8nVqLiByUYXgvB3tmRwcKue60O&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1Qljmd6NUGQc3oST__4Wyttqu_JHSBpyO&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1Ph5MT5Fr5LYkmCXDrc0T5gWHGzbljz7h&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=15SGOfBxckDa17E7AvuCK9OYlFoxRH-bZ&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1wtOY2nQgUs3oaA0T_HdjjCfyI8vDevTm&sz=w2048", 
        titulo: "Tamaki", 
        descripcion: "ApliqueApliqué un rigg al modelo de Tamaki para poder posarla.", 
        imagen1: "https://drive.google.com/thumbnail?id=1wtOY2nQgUs3oaA0T_HdjjCfyI8vDevTm&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=15tLTRO5Gbv9s9QZ8efeyU3ZXEtTyV2hj&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1QWC3nl1lYLEBB2QCdo5NOM5MpRjKxdzx&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1eJQ-WMyCiloqchJo3CepRMHwlFt4I7Bj&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=19ZG3vxJidFDf1MC0AVa4qdWTa597Ij53&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1wtOY2nQgUs3oaA0T_HdjjCfyI8vDevTm&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1PI7C60dMneorJ6fnc6TUXJkwyVknUhbK&sz=w2048", 
        titulo: "Lego <No puedes solo>", 
        descripcion: "Una animación llamada <No puedes solo>, el cual trata de dejar un mensaje positivo y de ayuda al espectador.", 
        imagen1: "https://drive.google.com/thumbnail?id=1PI7C60dMneorJ6fnc6TUXJkwyVknUhbK&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1MPQnllVOeCYBgoPOztf8__uyateTc78f&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1fODLdAEsBYK4TxlojKCFmxjQ9Y63JzfE&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1rmxEbTlOBdtVn91q51F07yYmpCWn9bxx&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1Okj8AoOQxtWEvF2M1yFIk1jv3JmviZI9&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1PI7C60dMneorJ6fnc6TUXJkwyVknUhbK&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1mQYbfLFpQn6-Sx1oaC7mZhvhQqyksydM&sz=w2048", 
        titulo: "Funko Pop", 
        descripcion: "Una animación de un Funko Pop del anime Fire Force saliendo de la caja para ver una serie.", 
        imagen1: "https://drive.google.com/thumbnail?id=1mQYbfLFpQn6-Sx1oaC7mZhvhQqyksydM&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1YZmr_B4fdQvki4s7Wl09YYgtDWBSD3Mc&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1RyYwKNUORMsAx0nF1ixZsknEi9pWl7Cs&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1-dyKA9Lthme8rVc0mv7HEuDXuI64uSRw&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1UaP9s-B_jeVNYFpMdFmtCUGb-nUrbtBN&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1mQYbfLFpQn6-Sx1oaC7mZhvhQqyksydM&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=12OlAFZCMWwEoLF21EvAtqGRZSJBe5341&sz=w2048", 
        titulo: "Escaleras Tron", 
        descripcion: "Hice las escaleras de Tron Legacy de cuando Clu llega al estadio para el juego de las motocicletas.", 
        imagen1: "https://drive.google.com/thumbnail?id=12OlAFZCMWwEoLF21EvAtqGRZSJBe5341&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1vcj7CN6WgPYlACD-JSD51kINo12rYdx9&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=11CCVZM5IBbG_L-jyPdwnmqn9R33vuisE&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1m8QQ51Vo77W49EzOUzy_XTYe32HAxGDG&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1dFCV4KxyN9KMPbvb_ilp0T9Lm0KqtjgX&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=12OlAFZCMWwEoLF21EvAtqGRZSJBe5341&sz=w2048"},
        // Agrega más imágenes según sea necesario
    ],
    ilustraciones_tradicionales: [
        { ruta: "https://drive.google.com/thumbnail?id=1zmWtv4b1QvU4VPfcw_3d8PNiwqTZV-cD&sz=w2048", 
        titulo: "Kiki", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1zmWtv4b1QvU4VPfcw_3d8PNiwqTZV-cD&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1YYbO3REtl2B916d-nMGp9n_2Uso_BLOF&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1BG7bdw67fYV9p9v8vShDMeXc7h5sTPOY&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1ZoaBj_nZNdmcQE5a3iEOrseI4ncAGYxb&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1BG7bdw67fYV9p9v8vShDMeXc7h5sTPOY&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1kEvFFEMJ8ltFTlAger387_5hQsYyKx0f&sz=w1365"},
        
        { ruta: "https://drive.google.com/thumbnail?id=1dROHbqCGZyBw-9PcIyCxGufJCn6_Ole5&sz=w2048", 
        titulo: "Madeon", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1dROHbqCGZyBw-9PcIyCxGufJCn6_Ole5&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1SYnpKpZRNYOp7QKpMSXFGrHyfP3PqPW-&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1z58N8ljq6Yl6IHQuzAllcabpY8lCDGsO&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1ZAqZaZBJD0r9x4yrGct3t3eIIIOfeYsn&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1-0TfqXycKVM9oIK7bjHwQxhwanQWPlVx&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1X1-OD4oqQm8LCHTfPIfFt0ZqCt2172KW&sz=w1365"},

        { ruta: "https://drive.google.com/thumbnail?id=1VVz6UyzEsBke-7I7acTbMWAsoTs8BR7d&sz=w2048", 
        titulo: "Anna", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1VVz6UyzEsBke-7I7acTbMWAsoTs8BR7d&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1TvDAnRmhBWa6Ox4QQWaAomhAh6sV3n7b&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1hWt1X1hfgoD9Nf4WmiKHwBoe2dDRUVfp&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1HlrikTNHBrO9RpCnk83EuRYaGNHe8bjE&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1DPyieidi6Q5egK1o_Kom-F_epH4-vTre&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1MTtCI0SxANx_M13z4zjjR7NpyfTKZeGL&sz=w1365"},

        { ruta: "https://drive.google.com/thumbnail?id=1owwJ7V8SjcSFq67qUqNwUcIt8kU3Nma9&sz=w2048", 
        titulo: "Doko", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1owwJ7V8SjcSFq67qUqNwUcIt8kU3Nma9&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1dZh8X_l5rQckF_rmfS1t3xPuCwX93_O-&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1K1ZDjIl7TCSfLOo84silcxUAI8ADmOVD&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1bPYYL0735-Bq-rBBeRpGdn9vLxmedPzI&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=12jA6FbqRQ1eAp-30asQrg6Hck1PG2_5W&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1owwJ7V8SjcSFq67qUqNwUcIt8kU3Nma9&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1IDHV17dqOqz-UDXQg4VPnr8VBMQJCpNt&sz=w2048", 
        titulo: "Aneta", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1IDHV17dqOqz-UDXQg4VPnr8VBMQJCpNt&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1_iCg7VjtHA3gs_09-cuwWVjR6PiXbY1b&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1tXGpF73JfRAT2tOwPPcHhnyai0YvOF0m&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1dAUj-lb-dA7KK8cSPWIIilO3G3qGqS0k&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1r_ZZTCrFdVThU3YwyqAw4c0AKdbyEY_N&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1IDHV17dqOqz-UDXQg4VPnr8VBMQJCpNt&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1FTPCGN4PBvkYrfTPCeufrgVTuOcPvmwt&sz=w2048", 
        titulo: "Teorema", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1FTPCGN4PBvkYrfTPCeufrgVTuOcPvmwt&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1KYKZERklbYXqz6rRrBZ24DFGxth5_iip&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1-caZ1We2hB5FrsbEIOjXjrVGfIvBhXus&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1VWN6wq-PpiD7vZc--0VD0hVAeVkICC6C&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1nzv5a5kuSHmKw0sgwYfrDLg3dQxG4knH&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1FTPCGN4PBvkYrfTPCeufrgVTuOcPvmwt&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1_XGw2-AI8i63h1p0Bzd7uh9jJ3rkzQob&sz=w2048", 
        titulo: "Shikimoru", 
        descripcion: "Una ilustración hecha con lápices staedtler, para practicar el realismo.", 
        imagen1: "https://drive.google.com/thumbnail?id=1_XGw2-AI8i63h1p0Bzd7uh9jJ3rkzQob&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1kO59rXiBwm74ItwkaKTelBpHX1O0ArUF&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1gnp4Re_umeo4goeGD0bc9PhQScqkFbF1&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1sr7LcekNtiAX99ZwnDfzsy8anx8UEADp&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1bAYhWKiEI-Y-fduaJjOtpgtnfX3lVosR&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1_XGw2-AI8i63h1p0Bzd7uh9jJ3rkzQob&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=19SLK4b4uP0qcMFqoazDwCi5m-5i0f_tn&sz=w2048", 
        titulo: "Arrow & Haumea", 
        descripcion: "Una ilustración hecha con colores Prisma Color.", 
        imagen1: "https://drive.google.com/thumbnail?id=19SLK4b4uP0qcMFqoazDwCi5m-5i0f_tn&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1SoT1Ba1DaMQjYKemNnMLOqHprwSeEBQj&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1I9zhZ5YWb4r-JzlKG38QKxCbNpJ6vr-X&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1iXymyXSTUI_BmtejzLh1R0xMJ98BBMFA&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1bxmBIeSK6doiKpgVPJ3XEgpiyDNv3UmI&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=19SLK4b4uP0qcMFqoazDwCi5m-5i0f_tn&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1PkR5R-n1t2c9jU5FVaS_c88c2JEXLK0c&sz=w2048", 
        titulo: "Tatsumaki", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores Copic.", 
        imagen1: "https://drive.google.com/thumbnail?id=1PkR5R-n1t2c9jU5FVaS_c88c2JEXLK0c&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1Hz_PEj4oDKr3oKv3vJ1-GldeWG0-DHnr&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=173c7i62bls5TxDoTqC5tglgRUdZR_m0i&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1qE5nOsByHqrwEGcbSm4PHl6F9MGVBRhw&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1FjgP3spDkYWa21RY1XeMcrZCSEZU5cJ2&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1o7Z4ADxtd-mwISQjOWEP1IEd8MOfwEZG&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1sCLUern0i9VIADDtjjewu6Wrm4ywRWAp&sz=w2048", 
        titulo: "Iris", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores Copic.", 
        imagen1: "https://drive.google.com/thumbnail?id=1sCLUern0i9VIADDtjjewu6Wrm4ywRWAp&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1pLVUOzdsOqc0QZXDRLcMP3JQNh3KdGI6&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1oxRyrrPzOL9W2HQ85qQ3Uvq-4pZfL0JR&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1Xu2ireZcPLssK5A5VgrnBeRZuEnNddeo&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1NMwif8pxuJU5maznSSIJ-QM4hPS6tTfm&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1k0ftXDT-vME3ZN4kqzeOILTBjpl3p_Nx&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=18aBLfJkfB1BA_nTTdZFR7KEHDZiKsMwz&sz=w2048", 
        titulo: "Bocchi", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores Copic.", 
        imagen1: "https://drive.google.com/thumbnail?id=18aBLfJkfB1BA_nTTdZFR7KEHDZiKsMwz&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1poLe5KqhwBZ7NLOFL4_iLVH3-_0l6VTj&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1Ef3LUgcbwwAF152GeYIS9Jyav522uVFi&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=19935d8ql22has4Hx2OTYIaJwso1UIvR0&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1qOxN7yD2p_GaFsGUAmNTcbzquo_jkxP5&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1iu7tchUU6IGl8ghrpRGJ9KGDsVd95xC1&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=11daK22JlAJ4i9C-aZgANXlpGg8fA-UHj&sz=w2048", 
        titulo: "Cacao", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=11daK22JlAJ4i9C-aZgANXlpGg8fA-UHj&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1Rql7htjz0Obk1TBBoJ54CQBy-2UbsttA&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1wymGpyC68zpFZQL-iTQyLP2LXeE7FSd1&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1vj9QDBB3VS7HJIGyJYRLb2C30rhsDA33&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1HNjL-2rNg_npIh_XXxiMD438RJrdhJWz&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1hoqrq8iot9LLLvqzPFZFRzXRG8ltL4e7&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1idebkNJBEQHRm-McSO3cmKCxcOmmiNaV&sz=w2048", 
        titulo: "Nadeshiko", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1idebkNJBEQHRm-McSO3cmKCxcOmmiNaV&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1nCAyvVWYFDceisOpP6-LsSLhUSxeA6BP&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1inCk9yok6UzQEnrEaIjG0Ps83S6WQr03&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=18FPdlZ1TH6Mv30j28lL0QF_4oG0165oz&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1TTFbla1AdB8BxfdKFXywBQ-ugKKXO6n5&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1hHJd2g3y9rX-cifHQuxBPrDFMMSw9Ihk&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1u_YdJczCu8MEkbrPPHe0hYSEp-j_Xv55&sz=w2048", 
        titulo: "Reina", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1u_YdJczCu8MEkbrPPHe0hYSEp-j_Xv55&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1eT5iRzcPqme5e3Vu5iNp5T59ttuVJXMp&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1kW7iiVYwD9rKUDCmegWT_aUT3NlC-g0t&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1G2I0_Ysd_tNZfipnQTqgkBz5MbKAsdKU&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=13rIUw74YXRR31eBT0cuCTM6AALiXZcyE&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1u_YdJczCu8MEkbrPPHe0hYSEp-j_Xv55&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1gG-DJ8vej5_YVFDjz7wbRPYNX46pk51E&sz=w2048", 
        titulo: "Tomoe", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1gG-DJ8vej5_YVFDjz7wbRPYNX46pk51E&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1lGyfvxSjOjl4b6o9EmBGwXN8LMyF0-JG&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=18eCJ2gfexVgVAhbYRvknzchM_DCqBBI-&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1HioVBxFKlVREasWjAFN5ugENXqi70HCk&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=11sqCd392WiIzdfWyL_hRD3pggDoriwC3&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1gG-DJ8vej5_YVFDjz7wbRPYNX46pk51E&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=126fQnD-EdrKVSa0Z6rd_pN9bDq-ce541&sz=w2048", 
        titulo: "Iris", 
        descripcion: "Una ilustración hecha con marcadores TouchFive", 
        imagen1: "https://drive.google.com/thumbnail?id=126fQnD-EdrKVSa0Z6rd_pN9bDq-ce541&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1LW8hq-yNqS_NyKt05jqWO8QgOZKC2XLr&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=15oQSXu2SmMBUac6gGlD1gdl3Pw0P1P8J&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1Hfyee3CAKnfnTaW3pqpvfCI6wc-nZitc&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1qgsj2Mpceyta3SJ4BPfg_WKtqHt8SKPb&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1f-DDF7fdNh3QtwbXmlbsrIB1Ip-usf40&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=10i-zKnDbyC2SPlfN4AFpqINqrRcRz0mA&sz=w2048", 
        titulo: "Mami", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=10i-zKnDbyC2SPlfN4AFpqINqrRcRz0mA&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1KNfdQuGQ-TxrpxGQ30CwLJ_WEBop1IgO&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1duXR8sIykKpk8xHz00lfg1YUy-ynOSOE&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1HjH2l0AinXqNNbuiqn0CI_dHy867SOTw&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1tgV9_oCpQvnRYksrCGTpFOd7QC5BVDEq&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1tWu4DA8BQzcVeEkw7Keahf8IrR0LLbY5&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1aYlK7qZZCw7H7-MdE1cmXdPDYR_s4nSa&sz=w2048", 
        titulo: "Yuru Yuri Niñas", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1aYlK7qZZCw7H7-MdE1cmXdPDYR_s4nSa&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1hQAp5-nmjIfwwiO7iMtSZHuyOunI4laR&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1D0IFIldbKDqlAoNTTnX7jUDic4KuhJIT&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1csi1iFykoL47Oeln4Fb5pwxs5zksnqEU&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1QuhDo7Vl4HtQr5FPKVjKdiafMO3NZLMn&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1IpbRWw8qXtyamwHb2n9eT7IYWHMeq7sK&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1KCXTAl7eN1HkTZX2ozlIpxUKs5UM5NBx&sz=w2048", 
        titulo: "Rei", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1KCXTAl7eN1HkTZX2ozlIpxUKs5UM5NBx&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1ikPHkiB0pIP2WVovlZwCLEEYgMSr4M-Q&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1xywGiVbzzS0NFg0zxB5gOXWVRb-8QBj1&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1s5bVWDEPy8f8tVPJyz9EN-grnk8BAAjO&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=1kCXokAkG6N7xQv4UEfRj7NlO2kJeYeX7&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1KCXTAl7eN1HkTZX2ozlIpxUKs5UM5NBx&sz=w2048"},

        { ruta: "https://drive.google.com/thumbnail?id=1E29XtgpRHdwNSbnglRp09SFZjQ8NRGUO&sz=w2048", 
        titulo: "Kumiko", 
        descripcion: "Una ilustración hecha con colores Prisma Color y marcadores TouchFive.", 
        imagen1: "https://drive.google.com/thumbnail?id=1E29XtgpRHdwNSbnglRp09SFZjQ8NRGUO&sz=w2048", 
        imagen2: "https://drive.google.com/thumbnail?id=1Sm1ofEJ2zd7lRVLhu8hjc7c_YFDJQrDp&sz=w2048", 
        imagen3: "https://drive.google.com/thumbnail?id=1FEY4pRewiyqazHeBOFlE4bto1RkV9y9F&sz=w2048", 
        imagen4: "https://drive.google.com/thumbnail?id=1ggJo9bI9Q_Q_xVcyTaEnrtv2NlaZv0Ii&sz=w2048", 
        imagen5: "https://drive.google.com/thumbnail?id=12wypUKEB9wqsP4zQ98kSBoQ_0QFDPUHM&sz=w2048",
        imagenParallax: "https://drive.google.com/thumbnail?id=1E29XtgpRHdwNSbnglRp09SFZjQ8NRGUO&sz=w2048"},

        // Agrega más imágenes según sea necesario
    ]
    // Agrega más tipos de imágenes según necesites
};

// Función para cargar las imágenes correspondientes a la categoría seleccionada
function cargarImagenes(categoria) {
    var contenedorImagenes = document.querySelector('.contenedor-imagenes');
    contenedorImagenes.innerHTML = ''; // Limpiar el contenedor de imágenes antes de cargar nuevas imágenes

    var imagenesCategoria = imagenes[categoria];

    if (imagenesCategoria) {
        imagenesCategoria.forEach(function(imagen) {
            var enlace = document.createElement('a'); // Crear un elemento de enlace
            enlace.href = 'Individual.html?ruta1=' + encodeURIComponent(imagen.imagen1) +
              '&ruta2=' + encodeURIComponent(imagen.imagen2) +
              '&ruta3=' + encodeURIComponent(imagen.imagen3) +
              '&ruta4=' + encodeURIComponent(imagen.imagen4) +
              '&ruta5=' + encodeURIComponent(imagen.imagen5) +
              '&titulo=' + encodeURIComponent(imagen.titulo) +
              '&imagenParallax=' + encodeURIComponent(imagen.imagenParallax) +
              '&descripcion=' + encodeURIComponent(imagen.descripcion);

            var imagenContainer = document.createElement('div');
            imagenContainer.className = 'imagenfondo';
            
            var imgElement = document.createElement('img');
            imgElement.src = imagen.ruta;
            imgElement.classList.add('imagen-editable'); // Agregar la clase "imagen-editable"
            enlace.appendChild(imgElement); // Agregar la imagen al enlace
            
            imagenContainer.appendChild(enlace); // Agregar el enlace al contenedor de imagen
            contenedorImagenes.appendChild(imagenContainer);
        });

    } else {
        contenedorImagenes.textContent = 'Tipo de imagen no válido';
    }
}

// Cargar las imágenes correspondientes a la categoría seleccionada
if (categoriaSeleccionada) {
    cargarImagenes(categoriaSeleccionada);
}