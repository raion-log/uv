# UV — RAION 제품 허브

수강생이 프로그램을 받는 **한 페이지**다. https://raion-log.github.io/uv/

강의(기수)를 고르면 그 기수에 배포되는 프로그램만 보인다.

---

## 파일

```
index.html        랜딩 한 장 — 틀만 있고 내용은 아래 데이터에서 읽는다
embed.js          데이터 로더 + 프로그램 목록      ← 새 프로그램은 여기에 한 줄
courses.js        강의·기수 목록
products/         프로그램 하나에 파일 하나
  reaction.js       UV 글로벌 반응 편집기
  vrewauto.js       VrewAuto 통합반 · 신규반 (두 항목)
  grok.js           RAION Grok Pro     (크롬 확장)
  genspark.js       RAION Genspark Pro (크롬 확장)
  flow.js           RAION Flow Pro     (크롬 확장)
uv.css            생김새
```

**왜 파일을 나눴나** — 프로그램마다 소스가 다른 기기에 있다. 한 파일에 몰아 두면
서로 다른 기기에서 고칠 때 부딪힌다. 담당자는 `products/` 안 **자기 파일 하나만** 만진다.

---

## 판을 올릴 때

`products/` 의 자기 파일에서 이것들만 바꾼다.

```js
version:   '1.2.4',
file:      'UV-Global-Reaction-Editor_1.2.4_x64-setup.exe',
size:      '640MB (...)',
published: '2026-09-10',
sha256:    '...',
download:  'https://github.com/.../releases/download/v1.2.4/...exe',
```

`index.html` 은 건드리지 않는다.

---

## 새 프로그램을 더할 때

1. `products/새이름.js` 를 만든다 (`reaction.js` 를 본으로 삼는다)
2. **`embed.js` 의 `목록` 배열에 `'새이름'` 을 더한다** ← 이 한 곳뿐이다
3. 기수가 정해졌으면 `courses:` 에 적는다. 아직이면 `[]` 로 두면
   「배포 기수 미정」으로 뜨고 기수 고르기에는 안 잡힌다

기수 이름은 `courses.js` 의 것과 **정확히 같아야** 한다.

---

## 다른 사이트(수강생 페이지)에서 같은 데이터 쓰기

한 줄이면 된다. 데이터를 두 벌로 적지 않는다.

```html
<script src="https://raion-log.github.io/uv/embed.js"></script>
<script>
  UV.ready.then(({ courses, items }) => {
    // courses = ['빈이파파 1기', ...]
    // items   = [{ id, name, edition, kind, courses, version, download, spec, ... }, ...]
    // 그 페이지의 생김새대로 그리면 된다.
  });
</script>
```

허브도 같은 파일을 쓴다. 그래서 한쪽만 낡는 일이 없다.

---

## ★ VrewAuto — 두 계보를 절대 섞지 말 것

배포 저장소(`vrewauto-releases`) README 의 경고 그대로다.

> 한 채널을 두 계보가 읽으면 반대편 설치파일을 받게 되고, 두 계보의 설치 식별자가 같아
> **서로를 덮어쓴다.** 2026-08-05 와 2026-08-12 에 같은 사고가 두 번 났다.
> `new.json`: 통합반 링크를 어떤 형태로도 넣지 말 것. **선택 페이지 경유도 금지.**

그래서 통합반·신규반을 **따로 세운 항목**으로 두고 각자 자기 기수에만 붙였다.
기수를 고르면 자기 것만 보이고 반대편은 화면에 없다. 이 구조를 바꾸지 말 것.

**2026-09-03 현재 두 계보 모두 공개 릴리스가 없다.** 설치파일을 올린 뒤
`products/vrewauto.js` 의 `download:` 주석을 풀면 카드가 다운로드로 바뀐다.

---

## 기수와 프로그램 (2026-09-03)

| 기수 | 받는 프로그램 |
|---|---|
| 빈이파파 1기 | Grok Pro · Genspark Pro · Flow Pro |
| 빈이파파 2기 | **VrewAuto 통합반**(브루 전용) + 확장 셋 |
| 빈이파파 3기 | **VrewAuto 신규반**(캡컷까지) |
| 라이온 1기 | 확장 셋 |
| 애삼이 1기 | 확장 셋 |
| 유벤져스 1기 · 2기 | 아직 없음 |
| 유유스 1기 | **UV 글로벌 반응 편집기** |
