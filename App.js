import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>هيئة شباب خاتم الانبياء</Text>
      <Text style={styles.sub}>مرحباً بكم في تطبيق الهيئة</Text>
      <Text style={styles.version}>الاصدار 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 15 },
  sub: { fontSize: 18, color: '#94a3b8', textAlign: 'center', marginBottom: 30 },
  version: { fontSize: 14, color: '#64748b', marginTop: 20 }
});
