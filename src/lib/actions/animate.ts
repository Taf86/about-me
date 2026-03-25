export type AnimationType = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

interface AnimateOptions {
  type?: AnimationType;
  delay?: number;
  threshold?: number;
  duration?: number;
}

export function animate(node: HTMLElement, options: AnimateOptions = {}) {
  const { type = 'fade', delay = 0, threshold = 0.15, duration = 600 } = options;

  node.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
  node.style.opacity = '0';

  switch (type) {
    case 'slide-up':
      node.style.transform = 'translateY(40px)';
      break;
    case 'slide-left':
      node.style.transform = 'translateX(-40px)';
      break;
    case 'slide-right':
      node.style.transform = 'translateX(40px)';
      break;
    case 'scale':
      node.style.transform = 'scale(0.92)';
      break;
    default:
      node.style.transform = 'none';
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'none';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
