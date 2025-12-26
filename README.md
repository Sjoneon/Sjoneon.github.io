# 송재원 포트폴리오

> 실무에서 바로 활용 가능한 백엔드 개발자

[![GitHub](https://img.shields.io/badge/GitHub-Sjoneon-181717?style=flat-square&logo=github)](https://github.com/Sjoneon)
[![Email](https://img.shields.io/badge/Email-spdjdps1649@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:spdjdps1649@gmail.com)

## 소개

실무에서 바로 활용 가능하도록 다양한 기술 스택 경험을 보유한 백엔드 개발자입니다. C언어부터 Spring Boot까지 다양한 기술을 활용하여 실제 문제를 기반으로 하는 프로젝트들을 완성했습니다.

데이터베이스 설계부터 API 연동과 구현까지 백엔드 개발의 전체 과정을 경험했으며, 다양한 외부 API 통합 경험과 클라이언트-서버 아키텍처 이해를 바탕으로 실용적인 솔루션을 구현합니다.

**특징**
- 실제 문제 해결 중심의 프로젝트 경험
- 체계적인 사전 설계를 통한 안정적인 개발
- 다양한 기술 스택을 활용한 풀스택 경험
- 팀 프로젝트를 통한 협업 역량

---

## 기술 스택

### Backend
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

### Database
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

### Cloud & DevOps
![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### Mobile & API
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)

---

## 프로젝트

### DaySync - AI 기반 스마트 일정 관리 앱
**2025.03 ~ 11 | 캡스톤 프로젝트**

일정 관리의 번거로움을 해결하고자 시작한 프로젝트로, AI 챗봇을 통한 자연스러운 대화로 일정을 관리하고 실시간 교통정보와 날씨를 제공하는 라이프스타일 앱입니다.

**Tech Stack**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazon-aws&logoColor=white)

**주요 기능**
- FastAPI로 RESTful API 서버 개발 및 AWS EC2 배포
- 일정 CRUD, AI 챗봇 연동, 날씨/교통정보 조회 REST API 엔드포인트 설계
- 공공데이터포털 API 장애 시 기상청 API로 자동 전환하여 서비스 안정성 확보
- 네이버 지도 API 연동으로 실시간 버스 경로 안내 기능 구현

**트러블 슈팅**
- **문제:** 국토교통부 TAGO 버스 API에서 동일 개념(정류장 순서)을 나타내는 필드가 API 응답마다 달라 일관된 처리 불가능
- **해결:** `TagoBusRouteStationResponse` 클래스에 모든 가능한 필드 선언, `getValidOrder()` 우선순위 메서드로 유효한 값 추출
- **배운 점:** 외부 API 통합 시 방어적 코딩과 우선순위 기반 폴백 로직의 중요성 체득

---

### SOS (Style of Simple) - 패션 초보 남성을 위한 온라인 쇼핑몰
**2024.03 ~ 06, 09 ~ 11**

패션에 관심 없었던 남성들이 옷을 고를 때 겪는 어려움을 해결하고자 시작한 프로젝트입니다. 20~30대 남성을 타겟으로 키워드 기반 추천 시스템을 통해 체형·상황·스타일에 맞는 제품을 쉽게 찾을 수 있도록 개발했습니다.

**Tech Stack**

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=flat-square&logo=thymeleaf&logoColor=white)

**주요 기능**
- Spring Boot MVC 패턴 기반 계층형 아키텍처 설계
- 회원/판매자 권한별 접근 제어, 장바구니, 주문 처리 시스템 개발
- 키워드 기반 상품 추천 알고리즘으로 체형·상황·분위기별 맞춤 제품 검색 구현
- Spring Data JPA 활용한 효율적인 데이터베이스 연동

**트러블 슈팅**
- **문제:** 초기 환경 설정 과정에서 Spring Boot 의존성 충돌과 DB 연결 불안정
- **해결:** pom.xml 의존성 호환 버전 명시, application.properties에 JPA ddl-auto와 HikariCP maximum-pool-size 설정 추가
- **배운 점:** 체계적 사전 설계의 중요성 체득. 이후 4학년 캡스톤에서는 1.5개월을 설계에 투자하여 구조 변경 없이 안정적으로 완성

---

### 렌터카 관리 시스템
**2024.03 ~ 05**

Java GUI 프로그래밍과 데이터베이스 연동 기술을 학습하기 위해 시작한 프로젝트입니다. MVC 패턴과 DAO 패턴을 적용한 데스크톱 통합 관리 시스템을 개발했습니다.

**Tech Stack**

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Swing](https://img.shields.io/badge/Java_Swing-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)

**주요 기능**
- AbstractBaseDAO 클래스 도입으로 다중 DAO의 DB 연결 관리 문제 해결
- MVC 패턴 기반 아키텍처로 View-Business Logic 분리
- JCalendar 라이브러리 통합으로 직관적인 예약 날짜 선택 UI 구현
- 회원/차량/예약 통합 관리 기능 개발

**트러블 슈팅**
- **문제:** 회원DAO, 차량DAO, 예약DAO 등 각 DAO 클래스에서 중복된 DB 연결 코드로 인한 코드 중복과 연결 누수 위험
- **해결:** `AbstractBaseDAO` 추상 클래스 생성하여 모든 공통 연결 정보와 `getConnection()` 메서드를 상속으로 제공
- **배운 점:** 상속을 활용한 코드 재사용과 DRY(Don't Repeat Yourself) 원칙의 실용성 체득

---

### 대기줄 관리 시스템
**2023.09 ~ 11**

복학 후 처음으로 C언어만을 이용해서 실생활에서 불편했던 점을 목표로 삼고 개발한 첫 프로젝트입니다. 실제 업무 현장의 대기 시간 문제를 체계적으로 분석하여 사전 예약 시스템으로 해결했습니다.

**Tech Stack**

![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)

**주요 기능**
- 전화번호 기반 예약 등록/조회 시스템 구현
- 문의 등록 및 답변 시스템 개발
- 블랙리스트 관리 시스템 구축
- 파일 I/O 기반 데이터 관리 및 자동 정리 기능

**학습 성과**

체계적인 요구사항 분석과 모듈화된 개발 프로세스의 중요성을 체득한 첫 프로젝트입니다.

---

### 최적 경로 탐색 시스템
**2023.03 ~ 05 | 팀 프로젝트 (4명) | 개인 기여도 35%**

자료구조 수업에서 배운 그래프 알고리즘을 실제로 구현해보고자 시작한 팀 프로젝트입니다. Dijkstra 알고리즘을 C언어로 구현하여 여러 교통수단을 고려한 최단 경로를 탐색하는 프로그램을 개발했습니다.

**Tech Stack**

![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)

**주요 기능**
- TUI(Terminal User Interface) 전체 설계 및 단독 구현
- Dijkstra 알고리즘 핵심 로직 구현 보조 (30% 기여)
- 4가지 교통수단별 가중치 계산 로직 개발
- 검색 기록 저장/조회 기능 구현

**팀 협업**

4명 팀에서 팀장과 함께 주도적으로 개발을 진행했습니다. UI 전체를 단독으로 담당하고 알고리즘 핵심 로직 구현에도 기여했습니다.

---

## 학력

**서원대학교 컴퓨터공학과**
- 2020.03 ~ 2026.02 재학 중 (2026년 2월 졸업 예정)
- 주요 이수 과목: 자료구조, 알고리즘, 데이터베이스, 소프트웨어공학, 운영체제, 컴퓨터네트워크 등

---

## 연락처

- **Email:** spdjdps1649@gmail.com
- **GitHub:** [github.com/Sjoneon](https://github.com/Sjoneon)

---

## 포트폴리오 파일

이 저장소에는 다음 파일들이 포함되어 있습니다:

- `index.html` - 7페이지 분량의 인쇄용 포트폴리오 (HTML)
- `README.md` - 본 파일 (GitHub용 포트폴리오)

**포트폴리오 보는 방법**
1. https://sjoneon.github.io/     해당 링크 접속

---

## 핵심 강점

### 체계적인 사전 설계
- 캡스톤 프로젝트에서 1.5개월간 아키텍처 설계에 투자
- 개발 중 구조 변경 없이 안정적으로 완성
- 요구사항 분석서, API 명세서, ERD 작성 습관

### 실제 문제 해결 경험
- 모든 프로젝트가 실생활 문제 해결에서 시작
- 대기줄 관리, 패션 추천, 일정 관리 등 실용적 솔루션 개발
- 사용자 경험을 고려한 기능 구현

### 다양한 기술 스택 경험
- C언어부터 Spring Boot, FastAPI까지 폭넓은 경험
- 데스크톱(Java Swing), 웹(Spring Boot), 모바일(Android) 개발 경험
- MySQL, Oracle 등 다양한 데이터베이스 활용

### 트러블 슈팅 능력
- 외부 API 필드 불일치 문제 → 우선순위 기반 폴백 로직으로 해결
- Spring Boot 의존성 충돌 → 체계적 설정으로 해결
- DAO 코드 중복 → AbstractBaseDAO 상속 구조로 해결

### 협업 및 커뮤니케이션
- 팀 프로젝트에서 주도적 역할 수행
- 코드 리뷰와 문서화를 통한 효율적인 협업
- Git/GitHub를 활용한 버전 관리

---

<div align="center">

**"단순한 기능 구현을 넘어, 사용자 경험과 코드 품질을 고려한 개발을 지향합니다"**

</div>
