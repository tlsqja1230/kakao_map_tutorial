export default class BundangguMap {
  map = null;
  $target = null;

  constructor({
    $target
  }) {
    this.$target = $target;
    this.map = new kakao.maps.Map(this.$target, {
      center: new kakao.maps.LatLng(37.4020288, 127.1066516),
      level: 4,
    });

    kakao.maps.event.addListener(this.map, "zoom_changed", () => {
      console.log(`map zoom level: ${this.map.getLevel()}`)
    });

    kakao.maps.event.addListener(this.map, "drag", () => {
      var bounds = this.map.getBounds();
      var sw = bounds.getSouthWest();
      var ne = bounds.getNorthEast();
      console.log(`south west: ${sw.getLat()},${sw.getLng()}\nnorth east: ${ne.getLat()},${ne.getLng()}`)
    });

    this.render();
  }

  render() {
    // 해당 위도,경도로 위치이동
    this.map.setCenter(new kakao.maps.LatLng(37.4020288, 127.1066516));

    // 마커 이미지 객체 생성
    const markerImage = new kakao.maps.MarkerImage(
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2020_kakao_challenge/marker-green.png",
      new kakao.maps.Size(24, 34)
    );

    // 마커 객체 생성
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.4020288, 127.1066516),
      title: "title",
      image: markerImage,
    });

    // 지도에 마커 그리기.
    marker.setMap(this.map);   

    // 마커 숨기기
    // marker.setMap(null)

    // 정보창 생성
    var infoWindow = new kakao.maps.InfoWindow({
      map: this.map,
      position: new kakao.maps.LatLng(37.3947464,127.1090181,17),
      content: `<div>판교역</div>`,
      removable: false
    })

    // infoWindow제거하기
    // infoWindow.close();
  }
}
