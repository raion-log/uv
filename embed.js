// UV 제품 데이터 로더 — 이 파일 하나만 부르면 기수·프로그램 목록이 채워진다.
//
// ★어디서든 쓸 수 있다. 수강생 페이지처럼 다른 사이트에서도 이 한 줄이면 된다:
//
//     <script src="https://raion-log.github.io/uv/embed.js"></script>
//     <script>
//       UV.ready.then(({ courses, items }) => {
//         // courses = ['빈이파파 1기', ...]   기수 목록
//         // items   = [{ id, name, courses, version, download, ... }, ...]
//         // 여기서 그 페이지의 생김새대로 그리면 된다.
//       });
//     </script>
//
// ★프로그램이 늘면 **이 파일의 목록에만** 한 줄 더한다. 허브(index.html)도 이 파일을
//   쓰므로 두 곳에 적을 일이 없다 — 두 벌로 적어 두면 한쪽이 조용히 낡는다.
(() => {
  const 목록 = ['reaction', 'vrewauto', 'grok', 'genspark', 'flow'];

  // 이 파일이 놓인 자리를 기준으로 나머지를 찾는다. 그래야 다른 사이트에서 불러도
  // courses.js·products/*.js 를 제대로 집는다.
  const here = new URL('.', document.currentScript.src).href;

  const UV = (window.UV = window.UV || { items: [], add(p) { this.items.push(p); } });

  const 불러오기 = (경로) => new Promise((되면, 안되면) => {
    const s = document.createElement('script');
    s.src = here + 경로;
    s.onload = () => 되면(경로);
    s.onerror = () => 안되면(new Error('못 불러옴: ' + 경로));
    document.head.append(s);
  });

  UV.ready = (async () => {
    await 불러오기('courses.js');
    // ★차례로 부른다. 한꺼번에 부르면 먼저 끝난 것부터 들어가 목록 순서가 뒤바뀐다.
    for (const 이름 of 목록) await 불러오기('products/' + 이름 + '.js');
    return { courses: window.UV_COURSES || [], items: UV.items };
  })();
})();
