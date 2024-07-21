<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Disclosure, DisclosureButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { navMenus } from '@/data/userdata'

const showProfile = ref(false)
const route = useRoute()
// if the whole console is getting refreshed,it means whole page is reloading. which is  not really good performance
// not implemented the router rules, where it will be read by the routerview
// will create a method that will push to the particular routes
</script>
<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <div
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center"></div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="menu in navMenus"
                :key="menu.id"
                :to="`/${menu.id}`"
                :class="[
                  menu.current
                    ? 'bg-gray-900 text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                ]"
                :aria-current="menu.current ? 'page' : undefined"
                >{{ menu.menu }}</RouterLink
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="showProfile = true"
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
            <Icon icon="mdi:user" :width="24" :height="24" />
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <div
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
              </div>
            </div>
            <div
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="showProfile"
                class="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-index"
              >
                <div @click="showProfile = false" class="flex items-end justify-end p-2">
                  <Icon icon="mdi:close" />
                </div>
                <div>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                </div>
                <div>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">Settings</a>
                </div>
                <div>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="menu in navMenus"
          :key="menu.id"
          as="a"
          RouterLink
          :to="menu.route"
          :class="[
            menu.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="menu.current ? 'page' : undefined"
          >{{ menu.menu }}</DisclosureButton
        >
      </div>
    </div>
  </Disclosure>
</template>
