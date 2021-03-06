(function() {

    var api = "http://52.69.145.204:3000/airs/latest";
    d3.json(api, function(data) { 

        $('.data-update-time').text('更新時間（每小時更新）：' + data[data.length-1]['PublishTime']);
        for (var site_index in data) {
            if (parseInt(data[site_index]['PM2_5']) <= 11) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui green tag label status').text('良好');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-1.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 23) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui green tag label status').text('正常');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-2.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 35) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui green tag label status').text('正常');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-3.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 41) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui yellow tag label status').text('普通');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-4.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 47) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui orange tag label status').text('稍差');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-5.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 53) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui orange tag label status').text('稍差');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-6.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 58) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui red tag label status').text('不良');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-7.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 64) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui red tag label status').text('不良');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-8.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) <= 70) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui black tag label status').text('非常不良');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-9.png');
            }
            else if (parseInt(data[site_index]['PM2_5']) >= 71) {
                $('#' + data[site_index]['site_id'] + ' .status').attr('class', 'ui purple tag label status').text('有害');
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-10.png');
            }
            else if (isNaN(parseInt(data[site_index]['PM2_5']))) {
                $('#' + data[site_index]['site_id'] + ' .status_img').attr('src', 'img/PM2.5-wait.png');
            }

            if (isNaN(parseInt(data[site_index]['PM2_5']))) {
                $('#' + data[site_index]['site_id'] + ' .pm25').children('h5')
                                .text("PM2.5: 待更新");
            }
            else {
                $('#' + data[site_index]['site_id'] + ' .pm25').children('h5')
                                .text("PM2.5: " + data[site_index]['PM2_5'] + " μg/m").append('<sup>3</sup>');
            }

            $('#' + data[site_index]['site_id'] + ' .psi').children('h5')
                            .text("PSI: " + data[site_index]['PSI']);

            $('#' + data[site_index]['site_id'] + ' .pm10').children('h5')
                            .text("PM10: " + data[site_index]['PM10'] + " μg/m").append('<sup>3</sup>');
        }
    });

    $("#country-selection").change(function() {
        window.location.href= "#" + $(this).val();
    });
})()
