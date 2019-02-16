(function($, R) {
    $(document).ready(init);

    var $albumContainer;

    function init() {
        getAlbums()
            .then(function(ALBUMS) {
                R.forEach(function(album) {
                    renderAlbum(album).appendTo('#gallery');
                }, ALBUMS);

                $('#gallery').jGallery({
                    mode: 'full-screen',
                    transitionDuration: '1s',
                    transitionTimingFunction: 'ease',
                    canChangeMode: false,
                    slideshow: false,
                    zoomSize: 'fit',
                    draggableZoomHideNavigationOnMobile: false,
                    textColor: '#444',
                    tooltipSeeAllPhotos: 'Alle Fotos im Album',
                    tooltipSeeOtherAlbums: 'Andere Alben anschauen',
                    tooltipToggleThumbnails: 'Thumbnails anzeigen/ausblenden',
                });

                $('<a/>')
                    .attr('href', '/')
                    .text('Zurück')
                    .addClass('back')
                    .appendTo('.jgallery .nav-bottom');
            });
    }

    function getAlbums() {
        return $.get('js/images.json');
    }

    var IMG_TMPL = '<a href="$LARGE$"><img src="$THUMB$"/></a>';

    function renderAlbum(album) {
        var $album = $('<div />').addClass('album').attr('data-jgallery-album-title', album.title);
        R.forEach(function(img) {
            $album.append(IMG_TMPL.replace('$LARGE$', img.href).replace('$THUMB$', img.thumb));
        }, album.images);
        return $album;
    }
})(jQuery, R);
