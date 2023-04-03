<template>
  <div class="div-shadow p-2 rounded mt-8">
    <h2 class="font-bold">المزادات الممفضلة</h2>
    <div v-for="i  in 3" :key="i" class="flex justify-between gap-2 mt-4">
      <div class="w-[40%] relative">
        <img class="h-full object-cover rounded"  src="@/assets/images/gg.svg" alt="">
        <img class="absolute top-2 right-2"  src="@/assets/images/gg4.svg" alt="">
        <img class="absolute top-2 left-2"  src="@/assets/images/1244.svg" alt="">
        <img class="absolute bottom-2 -right-[0.68rem]"  src="@/assets/images/gg3.svg" alt="">
      </div>
      <div class="w-[60%]">
        <p class="text-sm">
          سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام
          دابليو تصنيع 2021 حالته جديدة
        </p>
        <div class="flex justify-between px-2">
          <p class="flex gap-1">
            <img src="@/assets/images/coins.svg" alt="coins" />
            <span> اعلى سعر</span>
          </p>
          <P class="font-bold text-[#610060]">$500</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.div-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
