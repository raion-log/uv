// RAION Flow Pro — 크롬 확장프로그램
// ★배포 저장소 이름이 `raion-flow-pro-release` 다 — 다른 것들과 달리 **끝에 s 가 없다.**
// ★판을 올릴 때 함께 고칠 것: version · file · size · published · download
UV.add({
  id: 'flow',
  name: 'RAION Flow Pro',
  en: 'RAION Flow Pro · Chrome 확장프로그램',
  kind: 'ext',
  desc: 'Google Flow 에서 이미지·영상 만드는 일을 반자동으로 도와주는 크롬 확장프로그램입니다.',

  courses: ['빈이파파 1기', '빈이파파 2기', '라이온 1기', '애삼이 1기'],

  version: '1.2.2',
  file: 'raion-flow-pro-v1.2.2.zip',
  size: '2.5MB',
  published: '2026-05-22',
  download: 'https://github.com/raion-log/raion-flow-pro-release/releases/download/v1.2.2/raion-flow-pro-v1.2.2.zip',
  releases: 'https://github.com/raion-log/raion-flow-pro-release/releases',

  // 사용 가이드가 허브 저장소 안에 있다(guide/flow/). 안내문을 복사할 때 함께 따라간다.
  notes: [
    '사용 방법은 <a href="https://raion-log.github.io/uv/guide/flow/">사용 가이드</a>에서 '
      + '사진과 함께 볼 수 있습니다.',
  ],
});
