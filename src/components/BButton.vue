<script setup lang="ts">
defineProps<{
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "dark"
    | "light"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-info"
    | "outline-warning"
    | "outline-danger"
    | "outline-dark"
    | "outline-light";
}>();
</script>

<template>
  <v-btn :class="`btn btn--${variant}`">{{ variant }}</v-btn>
</template>

<style scoped lang="scss">
.btn {
  box-shadow: none;
}

.btn--primary {
  background-color: var(--primary);
  color: white;

  &:hover {
    color: white;
    background-color: var(--primary-hover);
  }
}

.btn--secondary {
  background-color: var(--secondary);
  color: white;

  &:hover {
    color: white;
    background-color: var(--secondary-hover);
  }
}

.btn--success {
  background-color: var(--success);
  color: white;

  &:hover {
    color: white;
    background-color: var(--success-hover);
  }
}

.btn--info {
  background-color: var(--info);
  color: white;

  &:hover {
    color: white;
    background-color: var(--info-hover);
  }
}

.btn--warning {
  background-color: var(--warning);
  color: white;

  &:hover {
    color: white;
    background-color: var(--warning-hover);
  }
}

.btn--danger {
  background-color: var(--danger);
  color: white;

  &:hover {
    color: white;
    background-color: var(--danger-hover);
  }
}

.btn--dark {
  background-color: var(--dark);
  color: white;
}

.btn--light {
  background-color: var(--light);
  color: black;

  &:hover {
    color: white;
    background-color: var(--light-hover);
  }
}

.btn--outline-primary {
  border: var(--btn-border-width) solid var(--primary);
  color: var(--primary);

  &:hover {
    color: white;
    background-color: var(--primary-hover);
  }
}

.btn--outline-secondary {
  border: var(--btn-border-width) solid var(--secondary);
  color: var(--secondary);

  &:hover {
    color: white;
    background-color: var(--secondary-hover);
  }
}

.btn--outline-success {
  border: var(--btn-border-width) solid var(--success);
  color: var(--success);

  &:hover {
    color: white;
    background-color: var(--success-hover);
  }
}

.btn--outline-info {
  border: var(--btn-border-width) solid var(--info);
  color: var(--info);

  &:hover {
    color: white;
    background-color: var(--info-hover);
  }
}

.btn--outline-warning {
  border: var(--btn-border-width) solid var(--warning);
  color: var(--warning);

  &:hover {
    color: white;
    background-color: var(--warning-hover);
  }
}

.btn--outline-danger {
  border: var(--btn-border-width) solid var(--danger);
  color: var(--danger);

  &:hover {
    color: white;
    background-color: var(--danger-hover);
  }
}

.btn--outline-dark {
  border: var(--btn-border-width) solid var(--dark);
  color: var(--dark);

  &:hover {
    color: white;
    background-color: var(--dark);
  }
}

.btn--outline-light {
  border: var(--btn-border-width) solid var(--light);
  color: var(--light);

  &:hover {
    color: black;
    background-color: var(--light);
  }
}
</style>
