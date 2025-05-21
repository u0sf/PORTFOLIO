import { database } from '@/lib/firebase';
import { ref, get, set, increment } from 'firebase/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const visitorRef = ref(database, 'visitorCount');
    const snapshot = await get(visitorRef);
    
    if (!snapshot.exists()) {
      // Initialize counter if it doesn't exist
      await set(visitorRef, 1);
      return NextResponse.json({ count: 1 });
    }

    // Increment the counter
    const newCount = snapshot.val() + 1;
    await set(visitorRef, newCount);
    
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
} 