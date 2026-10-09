---
layout: page
title: 프로젝트
description: 클라우드 관리 플랫폼, 서비스 API, 서버 모니터링과 운영 자동화 프로젝트에서 담당한 역할과 구현 내용을 정리했습니다.
---

백엔드 API부터 인프라 구축과 운영 자동화까지, 실제 서비스가 동작하는 전체 흐름을 다뤄 왔습니다.

## XCMP Backend

**예스씨엔씨 · 2026.07–현재 · 백엔드**

XenServer 기반 클라우드 관리 플랫폼의 API와 백그라운드 작업·수집 서비스를 개발합니다.

- 서버, 풀, 가상머신, 네트워크, 스토리지 도메인의 REST API를 설계하고 구현합니다.
- XenAPI 연동 작업을 RabbitMQ 기반 비동기 Job으로 처리해 작업 상태를 추적합니다.
- 운영 메트릭 수집과 임계값 판정, 로깅과 로그 로테이션을 구현합니다.
- XML-RPC 날짜 직렬화 오류와 템플릿 UUID 충돌을 수집 결과·실데이터 대조로 추적하고 회귀 테스트를 추가했습니다.

**기술:** Python, FastAPI, SQLAlchemy Async, Pydantic, RabbitMQ, Redis, MariaDB, Docker, XenAPI

## PCMP Backend

**예스씨엔씨 · 2025.12–현재 · 백엔드**

Proxmox 기반 클라우드 운영 플랫폼의 API와 공통 라이브러리, 백그라운드 서비스를 개발합니다.

- VM, Node, Storage, HA, Report와 VMware Migration 기능을 개발합니다.
- 장시간 걸리는 가상머신·노드 작업을 비동기 Job으로 처리하고 작업 상태를 추적합니다.
- 디스크, 네트워크, USB, PCI, TPM, CloudInit 설정을 일관된 요청·응답 스키마로 구성합니다.
- 스케줄러로 리소스를 동기화하고, 고가용성 운영과 비동기 보고서 생성 기능을 구현합니다.
- VMware에서 Proxmox로의 Cold Migration을 연결 검증·사전 점검·준비·실행 단계로 구성했습니다.

**기술:** Python 3.12, FastAPI, SQLAlchemy Async, Pydantic, RabbitMQ, Redis, MariaDB, MySQL, Docker Compose, Kong, Keycloak, Proxmox, Ceph, VMware

## GPU Allocation

**예스씨엔씨 · 2025.09–2025.11 · 백엔드·인프라 자동화**

NVIDIA GPU를 사용하는 Linux 서버에서 부서와 사용자 그룹별 GPU 접근 권한을 관리하는 시스템입니다.

- Linux 계정·그룹과 udev 규칙으로 장치 파일 접근 권한을 제어했습니다.
- 사용자 관리, GPU 할당·회수, 권한 적용을 운영 CLI로 구성했습니다.
- GPU ID·UUID와 범위 입력, long·short 옵션을 지원했습니다.
- 자원 회수와 권한 복구를 자동화하고, 상태 검증과 실행 로그를 추가했습니다.
- CUDA 및 가상 GPU 테스트 환경과 설치·패키징 문서를 구성했습니다.

**기술:** Bash, Linux, udev, NVIDIA GPU, nvidia-smi, C, Python, PyTorch, CUDA, PyCUDA

## Lime Agent / Dashboard

**라임프렌즈 · 2023.06–2024.03 · 팀장·백엔드**

여러 서비스 서버의 리소스를 수집하고 실시간으로 확인하는 모니터링 시스템입니다.

- Rust와 Tokio로 CPU, 메모리, 프로세스, 디스크 상태를 수집하는 에이전트를 개발했습니다.
- WebSocket으로 에이전트와 NestJS 서버를 연결해 상태 데이터를 전달했습니다.
- REST·WebSocket API와 PostgreSQL·TypeORM 기반 저장 구조를 구성했습니다.
- AWS EC2와 S3 기반 운영·백업 환경을 구축했습니다.

**기술:** Rust, Tokio, Tokio-tungstenite, TypeScript, NestJS, TypeORM, PostgreSQL, AWS

## 소액트

**라임프렌즈 · 2023.04–2023.06 · 백엔드**

소액주주를 위한 앱의 백엔드와 AWS 인프라를 구축했습니다.

- Express·TypeORM 기반 API와 트랜잭션, 데이터 스키마를 개발했습니다.
- OAuth 로그인과 Firebase 푸시 알림을 연동했습니다.
- EC2, RDS, S3, ELB와 Auto Scaling, Nginx 리버스 프록시를 구성했습니다.

## 메디포핀스

**라임프렌즈 · 2023.01–2023.06 · 백엔드**

의료 상담과 실시간 커뮤니케이션을 지원하는 백엔드를 개발했습니다.

- 상담·인증·알림 API와 데이터베이스 트랜잭션을 구성했습니다.
- Rocket.Chat·MongoDB와 Express 서버를 연동했습니다.
- AWS 인프라, Auto Scaling, HTTPS와 인증·푸시 알림을 구축했습니다.

## 캐스팅 앤 모델

**라임프렌즈 · 2022.11–2023.11 · 백엔드**

모델 캐스팅 서비스의 백엔드와 인프라를 개발했습니다.

- 모델 등록, 오디션 신청, 매칭 승인·거절 API를 구현했습니다.
- 이메일·문자 인증과 Google 로그인을 연동했습니다.
- AWS EC2, RDS, S3, ELB, VPC, CloudFront와 Auto Scaling을 구성했습니다.

## NIPA 인공지능 경진대회 개발 환경

**디딤365 · 2020.10 · 팀장·백엔드**

- Ncloud API로 300대 이상의 서버를 생성하고 공통 설정을 자동 적용했습니다.
- Bash로 OS 업데이트, 사용자 권한, Python 가상환경과 AI·ML 라이브러리 설치를 자동화했습니다.
- 환경 구성 후 상태 점검과 로그 기록을 포함해 운영 절차를 구성했습니다.

## 초기 프로젝트

- **431memo (2022.05):** Express·Prisma·MariaDB 기반 메모 서비스의 API와 AWS 인프라를 개발했습니다.
- **KVM Auto Scaling (2017.11):** 교육 프로젝트에서 가상 서버 확장을 위한 Bash 스크립트와 인프라를 구성했습니다.

[전체 경력과 기술 보기](/about/) · [GitHub](https://github.com/chunwoolee-dev)

내용 갱신: 2026년 10월 9일
