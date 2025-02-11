## Happy BirthDay 프로젝트 🎉

### 개발자의 연인 생일 이벤트 🥳
생일 파티 초대장을 웹사이트로 만들다!

https://github.com/user-attachments/assets/357a430c-9bc4-4f22-ac36-0f71035108b7
- [LinkedIn](https://www.linkedin.com/posts/seyeon-jang-a4955817b_%EB%82%A8%EC%9E%90%EC%B9%9C%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%83%9D%EC%9D%BC%ED%8C%8C%ED%8B%B0-%EC%B4%88%EB%8C%80-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-4%EB%85%84-%EB%A7%8C%EB%82%9C-%EB%82%A8%EC%9E%90%EC%B9%9C%EA%B5%AC%EB%A5%BC-activity-7294535220299452416-5U-T?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqePNkBithaXT-r5mXvW6Wa5g60POiWoRQ)
- [Instagram](https://www.instagram.com/reel/DF2DMRxxQpK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)

<hr>

### 기획. 생일 때 해줄 만한 신박한 이벤트가 없을까?🤔
오래 만난 연인인 만큼 선물은 자주 해주는데, 이벤트는 자주 못 해준 것 같더라고요.</br>
그를 웃음짓게 하기 위해 선물과 함께 조그만 이벤트로 웹을 하나 빠르게 개발해보았습니다!

#### 1️⃣ 니즈 파악
글램핑가서 뭐하고 싶어? 무슨 색 좋아해? 를 물어보며 어떤 내용을 초대장에 넣으면 좋을 지 기획하기 시작했어요. 😊

![image](https://github.com/user-attachments/assets/16dd41f3-8030-4477-baa9-bb9babf43d47)
![image](https://github.com/user-attachments/assets/f579fccd-741e-4081-a5ff-a70ca18830e0)

#### 2️⃣ 디자인
<img width="20%" src="https://github.com/user-attachments/assets/30c93309-df5c-4322-96ad-04cd71cb3fcc">
<img width="60%" src="https://github.com/user-attachments/assets/b0be8b92-9c80-47ad-88de-a9b2343805c3">

블랙과 그레이를 메인 컬러로 하되, 생일이라는 포인트를 주고 싶었는데요.</br>
배경이 블랙인 만큼 컬러풀한 케이크 하나를 가운데에 두기로 결정했습니다.</br>
이후, 3D 모델을 적용해보고 싶어서 무료 모델들을 여럿 찾아보던 중 제일 맘에 들고 해상도가 높은 모델을 하나 선택하게 되었습니다!</br>
- [Sketchfab에서 찾은 3D 모델](https://sketchfab.com/3d-models/cake-for-sketchfabday-c6e603381a3d47e28f84da2bc932b133)

<hr>

### 개발. Three.js로 3D 모델 렌더링하기 🖥️

#### 1️⃣ Three.js 적용
- **@react-three/fiber (필수 패키지)**
  
  |라이브러리에서 사용한 함수|함수 설명|적용사항|
  |---|---|---|
  |Environment|HDRI 이미지 기반의 조명 적용|케이크가 잘 보이도록 `sunset`으로 조명 선택|
  |ambientLight|전체적인 분위기 조명 적용|`intensity={0.5}`로 빛의 강도를 50%로 설정|
  |directionalLight|특정 방향에서 오는 직선 빛 적용|`position={[5, 5, 5]} intensity={1}`로 빛의 위치와 강도 설정|

- **@react-three/drei (유틸리티 패키지)**
  
  |라이브러리에서 사용한 함수|함수 설명|적용사항|
  |---|---|---|
  |Center|3D 오브젝트 중앙 정렬|케이크 모델을 중앙 정렬|
  |OrbitControls|카메라를 회전, 이동, 확대/축소할 수 있게 해주는 컨트롤러|확대/축소 비활성화, 화면 이동/전환 활성화|
  |PerspectiveCamera|원근 카메라|`position={[20, 5, 20]}` x,y,z 좌표 카메라 배치|

- 애니메이션
  ```JavaScript
  useFrame((state, delta) => {
        if (modelRef.current) {
          modelRef.current.rotation.y += delta * 0.5;
        }
    });
  ```
  - `useFrame`으로 3D 모델을 매 프레임마다 회전 (지속적으로 화면 업데이트)
  - `delta`(시간이 얼마나 지났는지)를 곱해 modelRef.current가 존재할 때만 회전 값을 업데이트
  - 조금의 안정성을 위해 `modelRef.current`로 모델이 있을 때만 회전 작동

#### 2️⃣ UI 예쁘게 다듬기
1인 기획-디자인-개발 이었기 때문에, 디자인을 그대로 반영한다기 보다는 원하는 디자인이 있을 때마다 코드로 그려보며 개발을 진행했습니다!<br/>
이렇게 나온 프로덕트는 다음과 같아요! 😊

https://github.com/user-attachments/assets/22ca0641-42be-4fd3-b14a-150b4da18dde

<img width="30%" src="https://github.com/user-attachments/assets/a2f1a4a8-1ec8-41a3-994f-a426dbe05154">
<img width="30%" src="https://github.com/user-attachments/assets/c7ae3054-a283-4bb9-a071-4ca540187019">

