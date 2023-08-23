PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "nxt_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 2,
	        "restart": 5,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 89.99999999999999,
	        "minpan": 0,
	        "mintilt": -89.99999999999999
	    },
	"hotspot": [
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "index.html",
	            "opacity": "1.00;1.00",
	            "position": "150.8036,8.8393",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Home"
	            },
	            "transition": "zoomin,2;blend,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "nxt",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"nxt_tiles/nxt_t_1b_%y_%x.jpg"},"down":{"src":"nxt_tiles/nxt_t_1d_%y_%x.jpg"},"front":{"src":"nxt_tiles/nxt_t_1f_%y_%x.jpg"},"height":1711,"left":{"src":"nxt_tiles/nxt_t_1l_%y_%x.jpg"},"right":{"src":"nxt_tiles/nxt_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"nxt_tiles/nxt_t_1u_%y_%x.jpg"},"width":1711},{"back":{"src":"nxt_tiles/nxt_t_2b_%y_%x.jpg"},"down":{"src":"nxt_tiles/nxt_t_2d_%y_%x.jpg"},"front":{"src":"nxt_tiles/nxt_t_2f_%y_%x.jpg"},"height":856,"left":{"src":"nxt_tiles/nxt_t_2l_%y_%x.jpg"},"right":{"src":"nxt_tiles/nxt_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"nxt_tiles/nxt_t_2u_%y_%x.jpg"},"width":856},{"back":{"src":"nxt_tiles/nxt_t_3b_%y_%x.jpg"},"down":{"src":"nxt_tiles/nxt_t_3d_%y_%x.jpg"},"front":{"src":"nxt_tiles/nxt_t_3f_%y_%x.jpg"},"height":428,"left":{"src":"nxt_tiles/nxt_t_3l_%y_%x.jpg"},"right":{"src":"nxt_tiles/nxt_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"nxt_tiles/nxt_t_3u_%y_%x.jpg"},"width":428}],"multilevel":true,"preview":{"src":"nxt_tiles/nxt_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.1"
}
}