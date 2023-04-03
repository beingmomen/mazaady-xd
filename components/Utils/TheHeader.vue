<template>
  <section
    class="container mx-auto md:container md:mx-auto px-4 flex sm:flex-row flex-col-reverse items-center sm:justify-between"
  >
    <div
      class="py-2 flex items-center gap-[0.12rem] flex-col-reverse sm:flex-row"
    >
      <select
        class="mt-2 sm:mt-0 select lg:w-44 max-w-xs bg-main/[.2] hover:outline-none focus:outline-none rounded-s-md rounded-e-md sm:rounded-e-none"
      >
        <option>مزاد مباشر متعدد</option>
        <option>مزاد مباشر</option>
        <option>مزاد عام</option>
        <option>إسم البائع</option>
        <option selected>مزاد مباشر متعدد</option>
        <option>مزاد عام متعدد</option>
        <option>رقم المنتج</option>
      </select>
      <span class="flex items-center ">
        <input
          type="text"
          placeholder="ابحث هنا"
          class="input lg:w-[39rem] bg-main/[.2] focus:outline-none rounded-e-md rounded-s-md sm:rounded-s-none placeholder:text-darker"
        />
        <button
          class="btn btn-square bg-main hover:bg-main border-none w-16 -mr-1"
        >
          <img src="@/assets/images/search.svg" alt="search" loading="lazy" />
        </button>
      </span>
    </div>
    <UtilsTheLogo text="Hello, World!" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
