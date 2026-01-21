import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { useAuthStore } from '../store/useAuthStore';

const LogoutIconButton = () => {
    const primaryColor = useThemeColor({}, 'primary');
    const { logout } = useAuthStore();

    return (
        <TouchableOpacity style={{ marginRight: 8 }}>
            <Ionicons name="log-out-outline" size={24} color={primaryColor} />
        </TouchableOpacity>
    )
}

export default LogoutIconButton