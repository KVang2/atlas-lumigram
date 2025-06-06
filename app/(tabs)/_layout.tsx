import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LogoutComponent } from '@/components/LogoutComponent';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1ED2AF",
        headerShown: true,
        headerRight: () => <LogoutComponent />,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home Feed',
          headerTitleAlign: "left",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerTitleAlign: "left",
          tabBarIcon: ({ color  }) => <IconSymbol size={28} name="magnifyingglass"
          color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="add-post"
        options={{
          title: 'Add Post',
          headerTitleAlign: "left",
          tabBarIcon: ({ color  }) => <IconSymbol size={28} name="plus"
          color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          headerTitleAlign: "left",
          tabBarIcon: ({ color  }) => <IconSymbol size={28} name="heart.fill"
          color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'My Profile',
          headerTitleAlign: "left",
          tabBarIcon: ({ color  }) => <IconSymbol size={28} name="person.fill"
          color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="profile/[id]"
        options={{
          title: 'My Profile',
          headerTitleAlign: "left",
          href: null,
        }}
      />
    </Tabs>
  );
}