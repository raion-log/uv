// VrewAuto 자동배치 — 계보가 **둘**이다. 한 파일에 두 항목으로 넣는다.
//
// ★★★ 두 계보를 절대 섞지 말 것 ★★★
//   배포 저장소 README 의 경고 그대로다:
//   "한 채널을 두 계보가 읽으면 반대편 설치파일을 받게 되고, 두 계보의 설치 식별자가
//    같아 서로를 덮어쓴다. 2026-08-05 와 2026-08-12 에 같은 사고가 두 번 났다."
//   new.json 에는 "선택 페이지 경유도 금지" 라고까지 적혀 있다.
//   → 그래서 한 카드에 두 판을 나란히 두지 않는다. 항목을 따로 세워 각자 자기 기수에만
//     붙인다. 수강생이 기수를 고르면 자기 것만 보인다.
//
// ★지금은 두 계보 모두 **공개 릴리스가 없다**(2026-09-03 확인). update/classic.json 과
//   new.json 의 windows_url 도 비어 있다. 설치파일을 올린 뒤 download 를 채우면
//   카드가 바로 「다운로드」로 바뀐다.

UV.add({
  id: 'vrewauto-classic',
  name: 'VrewAuto 자동배치',
  edition: '통합반 · 브루 전용',
  en: 'VrewAuto · Windows · v2.0.x',
  kind: 'win',
  desc: 'Vrew 씬별로 이미지를 자동 배치합니다. 통합반이 쓰는 계보입니다.',

  courses: ['빈이파파 2기'],

  version: '2.0.8',
  releases: 'https://github.com/raion-log/vrewauto-releases/releases',
  // download: '',                 // ← 설치파일을 올린 뒤 채운다
  notes: [
    '<b>신규반(캡컷 포함) 설치파일과 섞이면 서로를 덮어씁니다.</b> '
      + '통합반은 이 칸에서만 받으세요.',
  ],
});

UV.add({
  id: 'vrewauto-new',
  name: 'VrewAuto 자동배치',
  edition: '신규반 · 캡컷까지',
  en: 'VrewAuto · Windows · v2.1.x',
  kind: 'win',
  desc: 'Vrew 씬별 이미지 자동 배치에 더해 CapCut 정리까지 해 줍니다. 신규반이 쓰는 계보입니다.',

  courses: ['빈이파파 3기'],

  version: '2.1.1',
  releases: 'https://github.com/raion-log/vrewauto-releases/releases',
  // download: '',                 // ← 설치파일을 올린 뒤 채운다
  notes: [
    '<b>통합반(브루 전용) 설치파일과 섞이면 서로를 덮어씁니다.</b> '
      + '신규반은 이 칸에서만 받으세요.',
  ],
});
