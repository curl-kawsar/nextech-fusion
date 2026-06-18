import {
  workflowAccentStyles,
  workflowContent,
  workflowPinImages,
  workflowSteps,
} from "@/lib/workflow";
import { Reveal } from "@/components/home/Reveal";

type WorkflowCardProps = {
  step: (typeof workflowSteps)[number];
  bordered?: boolean;
};

function WorkflowCard({ step, bordered = false }: WorkflowCardProps) {
  const pinSrc = workflowPinImages[step.pin];
  const accent = workflowAccentStyles[step.accent];

  return (
    <div
      className={`relative bg-canvas rounded-[2.5rem] sm:rounded-[50px] p-5 sm:p-6 w-full max-w-[min(100%,18.5rem)] sm:max-w-72 md:w-80 mx-auto transform ${step.rotation} ${
        bordered ? "border-2 border-hairline" : "border border-hairline"
      } card-shadow-md`}
    >
      <div className="absolute -top-8 sm:-top-12 right-4 sm:right-12 z-10 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pinSrc} alt="" className="h-28 sm:h-40 md:h-56 w-auto max-w-[40%] sm:max-w-none" />
      </div>
      <div className="h-12 sm:h-16 md:h-20" aria-hidden="true" />
      <div
        className={`relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-gradient-to-t ${accent.gradient} to-transparent`}
      >
        <div className="space-y-2">
          <div
            className={`font-mono text-3xl sm:text-4xl font-semibold mb-1 sm:mb-2 tracking-tight ${accent.number}`}
          >
            {step.number}
          </div>
          <h3 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="text-body text-sm sm:text-base md:text-lg leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepConnector({ flip }: { flip: boolean }) {
  return (
    <div
      className="hidden md:flex justify-center py-2 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 64"
        fill="none"
        className={`w-24 h-14 ${flip ? "scale-x-[-1]" : ""}`}
      >
        <path
          d="M60 4 C 60 20, 40 44, 20 60"
          stroke="#a8a29e"
          strokeWidth="2"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
        <circle cx="60" cy="4" r="4" fill="#b45309" />
        <circle cx="20" cy="60" r="4" fill="#1c1917" />
      </svg>
    </div>
  );
}

function WorkflowRunway() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Center spine — desktop only */}
      <div
        className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 border-l border-dashed border-hairline hidden md:block"
        aria-hidden="true"
      />

      <ol className="flex flex-col">
        {workflowSteps.map((step, index) => {
          const alignRight = index % 2 === 0;
          const bordered = index % 2 === 1;

          return (
            <li key={step.number}>
              {index > 0 && <StepConnector flip={alignRight} />}

              <div
                className={`relative py-6 md:py-10 grid md:grid-cols-2 md:gap-16 items-center ${
                  alignRight ? "" : ""
                }`}
              >
                {alignRight ? (
                  <>
                    <div className="hidden md:block" aria-hidden="true" />
                    <Reveal className="flex justify-center md:justify-start md:pl-4">
                      <WorkflowCard step={step} bordered={bordered} />
                    </Reveal>
                  </>
                ) : (
                  <>
                    <Reveal className="flex justify-center md:justify-end md:pr-4 order-2 md:order-1">
                      <WorkflowCard step={step} bordered={bordered} />
                    </Reveal>
                    <div className="hidden md:block order-1 md:order-2" aria-hidden="true" />
                  </>
                )}

                <span
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-canvas border-2 border-brand-accent z-10"
                  aria-hidden="true"
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function WorkflowTimeline() {
  return (
    <div className="md:hidden relative pl-7 sm:pl-8 max-w-sm mx-auto w-full">
      <div
        className="absolute left-3 top-6 bottom-6 w-px border-l-2 border-dashed border-hairline"
        aria-hidden="true"
      />
      <ol className="space-y-14">
        {workflowSteps.map((step, index) => (
          <li key={step.number} className="relative">
            <span
              className="absolute -left-8 top-10 flex items-center justify-center w-6 h-6 rounded-full border-2 border-hairline bg-canvas text-[10px] font-mono font-semibold text-ink"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <Reveal>
              <WorkflowCard step={step} bordered={index % 2 === 1} />
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WorkflowSection() {
  const titleLines = workflowContent.title.split("\n");

  return (
    <section
      id="workflow"
      className="flex flex-col rounded-t-[2.5rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] items-center w-full mx-auto py-12 sm:py-16 md:py-24 gap-10 sm:gap-14 md:gap-16 bg-canvas border-t border-hairline overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 gap-4 sm:gap-5 max-w-4xl w-full">
        <p className="text-xs sm:text-sm font-semibold text-muted bg-canvas px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-hairline card-shadow">
          {workflowContent.badge}
        </p>
        <h2 className="font-display text-display-lg sm:text-5xl md:text-6xl lg:text-7xl py-1 sm:py-2 md:py-4 workflow-gradient-text leading-[1.05]">
          {titleLines[0]}
          <br />
          {titleLines[1]}
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-body max-w-2xl leading-relaxed font-medium px-2">
          {workflowContent.description}
        </p>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="hidden md:block">
          <WorkflowRunway />
        </div>
        <WorkflowTimeline />
      </div>
    </section>
  );
}
