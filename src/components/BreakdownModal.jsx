const BreakdownModal = ({ breakdown, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4">
            <h2 className="text-xl">Desglose de Cargos</h2>
            {/* Mostrar detalles del breakdown */}
            <ul>
                {breakdown.map((item, index) => (
                    <li key={index}>{item.description}: ${item.amount}</li>
                ))}
            </ul>
            <button onClick={onClose} className="bg-red-500 text-white p-2 mt-4">
                Cerrar
            </button>
        </div>
    </div>
);

export default BreakdownModal;
