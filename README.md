# 카카오맵 API 가이드

이 테스트에서는 카카오 맵에서 제공하는 JavaScript API 중, 아래에 명시된 API를 사용할 수 있습니다. 
(`BundangguMap.js`에서 사용하는 API이외에 다른 카카오맵 API이용은 금지되니 참고해 주세요.)


### 1. 지도에 마커/인포윈도우 그리기
- [마커 이미지](https://apis.map.kakao.com/web/documentation/#MarkerImage)를 만들기 위한 `new kakao.maps.MarkerImage`
- [마커](https://apis.map.kakao.com/web/documentation/#Marker)를 만들기 위한 `new kakao.maps.Marker`
- [인포윈도우](https://apis.map.kakao.com/web/documentation/#InfoWindow)를 만들기 위한 `new kakao.maps.InfoWindow`


### 2. [지도 객체](https://apis.map.kakao.com/web/documentation/#Map)에서 사용 가능한 메소드
 - [setCenter](https://apis.map.kakao.com/web/documentation/#Map_setCenter): 지도 중심 위치 설정
 - [getBounds](https://apis.map.kakao.com/web/documentation/#Map_getBounds): 지도가 그리고 있는 영역 획득
	 - bounds 객체에서 좌표를 획득하기 위한 `getSouthWest`, `getLat`, `getLng`까지 이용 가능
 - [getLevel](https://apis.map.kakao.com/web/documentation/#Map_getLevel): 지도의 줌 레벨 획득

### 3. 이용 가능 이벤트
 - [지도 위치 변경](https://apis.map.kakao.com/web/documentation/#Map_drag): 카카오맵에서 지도 위치 변경을 인식할 수 있는 방법은 여러가지가 있지만, 이 과제를 수행하면서는 반드시 drag이벤트를 통해 지도 위치 변경을 처리해 주세요.(dragend, dragstart 이벤트는 코드에서 사용해서는 안됩니다)
 - [지도 줌 레벨 변경](https://apis.map.kakao.com/web/documentation/#Map_zoom_changed)


### 사용법
npm install 이후 npm start 해서 사용하시면 됩니다.