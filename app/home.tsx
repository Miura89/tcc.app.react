import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Seja bem-vindo, Matheus!</Text>
        <Text style={styles.subtitle}>Encontre seu proximo evento</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Procure um evento...</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Novidades</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredContainer}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.featuredCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80' }}
                style={styles.featuredImage}
              />
              <View style={styles.featuredContent}>
                <Text style={styles.eventName}>Calourada Pucc</Text>
                <Text style={styles.eventDate}>14 de Fevereiro, 2025</Text>
                <Text style={styles.eventPrice}>R$ 40.00</Text>
                <Text style={styles.eventPrice}>Lote 1</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Vem ai...</Text>
        {[1, 2, 3, 4].map((item) => (
          <TouchableOpacity key={item} style={styles.eventCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&auto=format&fit=crop&q=80' }}
              style={styles.eventImage}
            />
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Festa fantasia</Text>
              <Text style={styles.eventDate}>20 de novembro, 2025</Text>
              <Text style={styles.eventPrice}>R$ 70.00</Text>
              <Text style={styles.eventPrice}>Lote 3</Text>
            </View>
          </TouchableOpacity>
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
  greeting: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1a1a1a',
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  searchText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginLeft: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#1a1a1a',
    marginBottom: 16,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  featuredCard: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  featuredContent: {
    padding: 16,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  eventImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  eventContent: {
    flex: 1,
    padding: 16,
  },
  eventName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  eventDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  eventPrice: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#007AFF',
  },
});