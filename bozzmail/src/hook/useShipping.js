import { useState, useEffect,useCallback } from 'react';
import {
    createShipment,
    getShipmentRates,
    purchaseShipment,
    trackShipment,
    getUserShipments,
    getShipmentById,
    createBatchShipment,
    getUserBatches,
    getUserAddresses,
    createAddress,
    updateAddress,
    deleteAddress,
    verifyAddress,
    importAddresses,
    getUserCustoms,
    createCustoms,
    updateCustoms,
    deleteCustoms
} from '../api/shippingAPI';

export const useShipping = () => {
    const [shipments, setShipments] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [customs, setCustoms] = useState([]);
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        totalLabels: 0,
        totalSpent: 0,
        avgCost: 0,
        international: 0
    });

    // Load user shipments
    const loadShipments = useCallback(async (page = 1, limit = 10) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserShipments(page, limit);
            if (response.data) {
                setShipments(response.data.shipments || response.data);
                
                // Calculate stats
                const totalLabels = response.data.shipments?.length || 0;
                const totalSpent = response.data.shipments?.reduce((sum, shipment) => 
                    sum + (parseFloat(shipment.cost) || 0), 0) || 0;
                const avgCost = totalLabels > 0 ? totalSpent / totalLabels : 0;
                const international = response.data.shipments?.filter(shipment => 
                    shipment.isInternational).length || 0;

                setStats({
                    totalLabels,
                    totalSpent: parseFloat(totalSpent.toFixed(2)),
                    avgCost: parseFloat(avgCost.toFixed(2)),
                    international
                });
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load shipments');
        } finally {
            setLoading(false);
        }
    }, []);

    // Load user addresses
    const loadAddresses = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserAddresses();
            if (response.data) {
                setAddresses(response.data.addresses || response.data);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load addresses');
        } finally {
            setLoading(false);
        }
    }, []);


    // Load user customs
    const loadCustoms = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserCustoms();
            if (response.data) {
                setCustoms(response.data.customs || response.data);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load customs');
        } finally {
            setLoading(false);
        }
    };

    // Load user batches
    const loadBatches = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserBatches();
            if (response.data) {
                setBatches(response.data.batches || response.data);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load batches');
        } finally {
            setLoading(false);
        }
    };

    // Create new shipment
    const createNewShipment = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await createShipment(service, data);
            if (response.data) {
                // Reload shipments after creation
                await loadShipments();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create shipment');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Get shipment rates
    const getRates = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getShipmentRates(service, data);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to get rates');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Purchase shipment
    const purchaseNewShipment = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await purchaseShipment(service, data);
            if (response.data) {
                // Reload shipments after purchase
                await loadShipments();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to purchase shipment');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Track shipment
    const trackShipmentByService = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await trackShipment(service, data);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to track shipment');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Create new address
    const createNewAddress = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await createAddress(data);
            if (response.data) {
                // Reload addresses after creation
                await loadAddresses();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create address');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Update address
    const updateUserAddress = async (id, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await updateAddress(id, data);
            if (response.data) {
                // Reload addresses after update
                await loadAddresses();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update address');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Delete address
    const deleteUserAddress = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteAddress(id);
            if (response.data) {
                // Reload addresses after deletion
                await loadAddresses();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete address');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Verify address
    const verifyUserAddress = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await verifyAddress(data);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to verify address');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Import addresses
    const importUserAddresses = async (file) => {
        setLoading(true);
        setError(null);
        try {
            const response = await importAddresses(file);
            if (response.data) {
                // Reload addresses after import
                await loadAddresses();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to import addresses');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Create customs
    const createNewCustoms = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await createCustoms(service, data);
            if (response.data) {
                // Reload customs after creation
                await loadCustoms();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create customs');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Update customs
    const updateUserCustoms = async (customId, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await updateCustoms(customId, data);
            if (response.data) {
                // Reload customs after update
                await loadCustoms();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update customs');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Delete customs
    const deleteUserCustoms = async (customId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteCustoms(customId);
            if (response.data) {
                // Reload customs after deletion
                await loadCustoms();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete customs');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Create batch shipment
    const createNewBatchShipment = async (service, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await createBatchShipment(service, data);
            if (response.data) {
                // Reload batches after creation
                await loadBatches();
                return response.data;
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create batch shipment');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Clear error
    const clearError = () => {
        setError(null);
    };

    return {
        // State
        shipments,
        addresses,
        customs,
        batches,
        loading,
        error,
        stats,
        
        // Actions
        loadShipments,
        loadAddresses,
        loadCustoms,
        loadBatches,
        createNewShipment,
        getRates,
        purchaseNewShipment,
        trackShipmentByService,
        createNewAddress,
        updateUserAddress,
        deleteUserAddress,
        verifyUserAddress,
        importUserAddresses,
        createNewCustoms,
        updateUserCustoms,
        deleteUserCustoms,
        createNewBatchShipment,
        clearError
    };
}; 