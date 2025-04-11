import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TicketsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tickets</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.ticketCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80' }}
              style={styles.ticketImage}
            />
            <View style={styles.ticketContent}>
              <Text style={styles.eventName}>Summer Music Festival</Text>
              <Text style={styles.eventDate}>July 15, 2025</Text>
              <View style={styles.ticketInfo}>
                <Text style={styles.ticketType}>VIP Pass</Text>
                <Text style={styles.ticketStatus}>Valid</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1a1a1a',
  },
  ticketCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  ticketImage: {
    width: '100%',
    height: 160,
  },
  ticketContent: {
    padding: 16,
  },
  eventName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  eventDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  ticketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketType: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#007AFF',
  },
  ticketStatus: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#34C759',
  },
});