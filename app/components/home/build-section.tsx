import Image from "next/image";

export default function BuildSection() {
  return (
    <section className="build-section" id="work">
      <div className="wrap">
        <div className="build-heading" data-reveal="">
          <span className="eyebrow">01 / INSIDE THE BUILD</span>
          <h2>
            Beyond the <em>surface.</em>
          </h2>
          <p>
            Two different products. The same attention to what makes them feel
            effortless.
          </p>
        </div>
        <article className="build-feature oren-feature" data-reveal="">
          <div className="build-copy">
            <span className="build-index">01 / PRODUCT THINKING · SWIFTUI</span>
            <h3>
              Make the next page
              <br />
              <em>feel easy.</em>
            </h3>
            <p>
              Reading apps are good at collecting books. Oren is built around
              the moment you actually open one.
            </p>
            <div className="build-detail">
              <span>THE DECISION</span>
              <p>
                Bring the current book, reading goal, and progress together on
                one calm home screen. A short session always has a clear next
                step.
              </p>
            </div>
            <a
              className="build-link"
              href="https://www.getoren.app/"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE OREN <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="oren-stage">
            <span className="stage-caption">
              A HOME FOR THE READING HABIT / 01
            </span>
            <div className="oren-screen">
              <Image
                src="/projects/oren-home.webp"
                alt="Oren home screen showing a current book, reading goal, and progress"
                width={684}
                height={1487}
                sizes="(max-width: 700px) 240px, 340px"
              />
            </div>
            <span className="stage-mark" aria-hidden="true">
              ✳
            </span>
          </div>
        </article>
        <article className="build-feature permissions-feature" data-reveal="">
          <div className="build-copy">
            <span className="build-index">
              02 / OPEN SOURCE · JETPACK COMPOSE
            </span>
            <h3>
              Less ceremony.
              <br />
              <em>More building.</em>
            </h3>
            <p>
              Android permissions need careful handling, but asking for one
              shouldn’t take over a screen.
            </p>
            <div className="build-detail">
              <span>THE DECISION</span>
              <p>
                A composable state keeps permission checks, requests, and
                required access in one readable flow. Custom rationale UI stays
                possible when the experience calls for it.
              </p>
            </div>
            <a
              className="build-link"
              href="https://github.com/meticha/permissions-compose"
              target="_blank"
              rel="noreferrer"
            >
              VIEW THE LIBRARY <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="code-stage">
            <div className="code-window">
              <div className="code-bar">
                <span>PermissionScreen.kt</span>
                <span>KOTLIN / COMPOSE</span>
              </div>
              <pre>
                <code>{`@Composable
fun PermissionScreen() {
    val permissions = rememberAppPermissionState(
        permissions = listOf(
            AppPermission(
                permission = Manifest.permission.CAMERA,
                description = "Camera access is needed",
                isRequired = true
            )
        )
    )

    Button(onClick = { permissions.requestPermission() }) {
        Text("Allow camera")
    }
}`}</code>
              </pre>
            </div>
            <span className="code-caption">
              ONE STATE. A CLEARER PERMISSION FLOW. / 02
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
