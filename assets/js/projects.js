(function () {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  function createActionLink(href, label, modifier) {
    const a = document.createElement("a");
    a.href = href;
    a.className = `btn btn-sm${modifier ? ` ${modifier}` : ""} project-action`;
    a.textContent = label;
    if (/^https?:/i.test(href)) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    return a;
  }

  function createCard(project) {
    const article = document.createElement("article");
    article.className = "card project-card reveal";

    const thumb = document.createElement("div");
    thumb.className = "project-thumb";
    thumb.dataset.code = project.code || project.id;
    const role = document.createElement("span");
    role.className = "eyebrow";
    role.textContent = project.role;
    thumb.appendChild(role);

    const body = document.createElement("div");
    body.className = "project-body";

    const meta = document.createElement("div");
    meta.className = "project-meta";
    const period = document.createElement("span");
    period.textContent = project.period;
    meta.appendChild(period);
    if (project.context) {
      const ctx = document.createElement("span");
      ctx.textContent = project.context;
      meta.appendChild(ctx);
    }

    const titleWrap = document.createElement("div");
    const title = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.href = project.detailPath;
    titleLink.className = "project-title-link";
    titleLink.setAttribute("aria-label", `${project.title} 상세 보기`);
    titleLink.textContent = project.title;
    title.appendChild(titleLink);
    const tagline = document.createElement("p");
    tagline.textContent = project.tagline;
    titleWrap.appendChild(title);
    titleWrap.appendChild(tagline);

    const chipList = document.createElement("ul");
    chipList.className = "chip-list";
    chipList.setAttribute("role", "list");
    project.stack.slice(0, 6).forEach((item) => {
      const li = document.createElement("li");
      li.className = "chip";
      li.textContent = item;
      chipList.appendChild(li);
    });

    const points = document.createElement("ul");
    points.className = "point-list";
    project.highlights.slice(0, 3).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      points.appendChild(li);
    });

    const actions = document.createElement("div");
    actions.className = "project-actions";
    actions.appendChild(createActionLink(project.detailPath, "자세히 보기", "btn-primary"));
    if (project.repo) actions.appendChild(createActionLink(project.repo, "GitHub"));
    if (project.demo) {
      const demoLink = createActionLink(project.demo, "Demo");
      if (project.demoNote) demoLink.title = project.demoNote;
      actions.appendChild(demoLink);
    }

    body.appendChild(meta);
    body.appendChild(titleWrap);
    body.appendChild(chipList);
    body.appendChild(points);
    body.appendChild(actions);
    if (project.demo && project.demoNote) {
      const demoNote = document.createElement("p");
      demoNote.className = "demo-note muted";
      demoNote.textContent = `데모: ${project.demoNote}`;
      body.appendChild(demoNote);
    }

    article.appendChild(thumb);
    article.appendChild(body);
    return article;
  }

  function renderProjects(projects) {
    grid.replaceChildren(...projects.map(createCard));
    document.dispatchEvent(new CustomEvent("projects:rendered"));
  }

  function renderError(message) {
    grid.innerHTML = "";
    const note = document.createElement("p");
    note.className = "muted";
    note.textContent = message;
    grid.appendChild(note);

    const fallback = [
      ["projects/ansim-siktak.html", "안심식탁 — 알러지 안전도 판정 외식 플랫폼"],
      ["projects/ssafy-blind.html", "SSAFY SOOP — 익명 커뮤니티 플랫폼"],
      ["projects/ssafy-spring-study.html", "SSAFY Spring 스터디 — 공동 리더 및 강의 담당"],
      ["projects/sangmyung-wiki.html", "Sangmyung_Wiki — 졸업 캡스톤"],
      ["projects/bootblog.html", "BootBlog — 멀티 유저 블로그"],
    ];
    const list = document.createElement("ul");
    list.className = "point-list";
    list.style.marginTop = "16px";
    fallback.forEach(([href, label]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = href;
      a.textContent = label;
      li.appendChild(a);
      list.appendChild(li);
    });
    grid.appendChild(list);
  }

  fetch("data/projects.json")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(renderProjects)
    .catch(() => {
      renderError("프로젝트 정보를 불러오지 못했습니다. GitHub 저장소에서 직접 확인해 주세요.");
    });
})();
