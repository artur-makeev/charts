import Modal from '@mui/material/Modal';
import styles from './AddChartModal.module.css';
import { useState } from 'react';
import type { ChartColor, ChartType } from '@/models/IChart';
import Paper from '@mui/material/Paper';
import { SelectChartType } from '../SelectChartType/SelectChartType';
import { SelectChartColor } from '../SelectChartColor/SelectChartColor';
import { ChangeChartName } from '../ChangeChartName/ChangeChartName';
import Button from '@mui/material/Button';
import { useAppDispatch } from '@/hooks/redux';
import { createChart } from '@/store/reducers/ActionCreators';
import { uid } from '@/helpers/uid';
import { mockChartData } from '@/mocks/mockChartData';
import { roboto } from '@/theme/theme';

export const AddChartModal = () => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState<string>('');
	const [type, setType] = useState<ChartType>('line');
	const [color, setColor] = useState<ChartColor>('#2196f3');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSave = () => {
		dispatch(
			createChart({
				id: uid(),
				name: name,
				type: type,
				color: color,
				data: mockChartData,
			})
		);
		handleClose();
		setName('');
	};

	return (
		<div>
			<Button onClick={handleOpen}>Add chart</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Paper className={styles.container}>
					<h2 className={roboto.className}>Add chart</h2>
					<ChangeChartName name={name} setName={setName} />
					<div className={styles.colorAndTypeContainer}>
						<SelectChartType type={type} setType={setType} />
						<SelectChartColor color={color} setColor={setColor} />
					</div>
					<div className={styles.buttonsContainer}>
						<Button onClick={handleSave}>Add chart</Button>
						<Button onClick={handleClose} color='error'>
							Cancel
						</Button>
					</div>
				</Paper>
			</Modal>
		</div>
	);
};
